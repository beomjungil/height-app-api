import 'cross-fetch/polyfill';
import { type HeightConfig } from './HeightConfig';
import { type ApiConfig, Methods } from './Methods';
import omit from './utils/omit';

/**
 * A Wrapper for the {@link https://www.notion.so/API-documentation-643aea5bf01742de9232e5971cb4afda | Height API}
 *
 * @remarks
 * To use Height API, you have to get a secret key.
 * Go to {@link https://height.app | Height app} and get secret key in 'Settings \> API'.
 *
 * @public
 */
export class Height extends Methods {
  /**
   * {@inheritdoc HeightConfig}
   * @internal
   */
  private readonly config: HeightConfig;

  /**
   * Axios instance to call Height API
   * @internal
   */
  private readonly api: (path: string, init: RequestInit) => Promise<Response>;

  /**
   * @param config - Configuration for Height API Wrapper
   */
  constructor(config: HeightConfig) {
    super();
    this.config = config;
    this.api = (path, init) => fetch('https://api.height.app' + path, {
      ...init,
      headers: {
        ...(init.headers ?? {}),
        Authorization: `api-key ${this.config.secretKey}`,
        'Content-Type': 'application/json',
      }
    });
  }

  private readonly requestToQueries = (request: Record<string, unknown> | undefined): URLSearchParams | undefined => {
    const queries = Object.keys(request ?? {}).length
      ? Object.entries(request ?? {}).reduce<Record<string, string>>((result, [key, value]) => ({
        ...result,
        [key]: typeof value === 'object'
          ? JSON.stringify(value)
          : String(value),
      }), {})
      : undefined;

    return queries ? new URLSearchParams(queries) : undefined;
  };

  private readonly normalizeArguments = (config: ApiConfig, request: Record<string, unknown> | undefined): { url: string; body: Record<string, unknown> | void } => {
    const pathVariables = config.endpoint.match(/:[a-zA-Z0-9]+/g);

    const { url, omittedRequest } = pathVariables === null
      ? { url: config.endpoint, omittedRequest: request }
      : pathVariables.reduce((result, pathVariable) => {
        const key = pathVariable.replace(':', '');

        if (request?.[key] != null) {
          const replaceValue = typeof request[key] === 'object' ? JSON.stringify(request[key]) : request[key] as string;
          return {
            url: result.url.replace(
              pathVariable,
              replaceValue,
            ),
            omittedRequest: omit(result.omittedRequest, key as keyof typeof result.omittedRequest),
          };
        }

        return result;
      }, { url: config.endpoint, omittedRequest: request });

    if (config.method === 'GET') {
      const queries = this.requestToQueries(omittedRequest);

      return {
        url: `${url}${queries ? `?${queries.toString()}` : ''}`,
        body: undefined,
      };
    }

    if (Object.hasOwn(omittedRequest ?? {}, 'queryParams') && Object.keys(omittedRequest?.queryParams as Record<string, unknown>).length) {
      const queries = this.requestToQueries(omittedRequest?.queryParams as Record<string, unknown>);

      return {
        url: `${url}?${queries?.toString() ?? ''}`,
        body: omit(omittedRequest, 'queryParams' as keyof typeof omittedRequest),
      };
    }

    return {
      url,
      body: omittedRequest,
    };
  };

  public async apiRequest(config: ApiConfig, request: Record<string, unknown> | undefined): Promise<unknown> {
    const { url, body } = this.normalizeArguments(config, request);

    return new Promise((resolve, reject) => {
      this.api(url, {
        method: config.method,
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        body: request
          ? JSON.stringify(body)
          : undefined,
      })
        .then((response) => {
          response.json().then(resolve);
        })
        .catch((error) => {
          if (error.response != null) {
            reject(error.response.data);
          }
          reject(error);
        });
    });
  }
}
