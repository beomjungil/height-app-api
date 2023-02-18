import axios, { type AxiosInstance, type AxiosError } from 'axios';
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
  private readonly api: AxiosInstance;

  /**
   * @param config - Configuration for Height API Wrapper
   */
  constructor (config: HeightConfig) {
    super();
    this.config = config;
    this.api = axios.create({
      baseURL: 'https://api.height.app',
      headers: {
        Authorization: `api-key ${this.config.secretKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

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
      const queries = Object.keys(omittedRequest ?? {}).length
        ? Object.entries(omittedRequest ?? {}).reduce<Record<string, string>>((result, [key, value]) => ({
          ...result,
          [key]: typeof value === 'object'
            ? JSON.stringify(value)
            : String(value),
        }), {})
        : undefined;

      return {
        url: `${url}${queries ? `?${new URLSearchParams(queries).toString()}` : ''}`,
        body: undefined,
      };
    }

    return {
      url,
      body: omittedRequest,
    };
  };

  public async apiRequest (config: ApiConfig, request: Record<string, unknown> | undefined): Promise<unknown> {
    const { url, body } = this.normalizeArguments(config, request);
    console.log({ url, body });
    return new Promise((resolve, reject) => {
      this.api.request({
        method: config.method,
        url,
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        data: request
          ? JSON.stringify(body)
          : undefined,
      })
        .then((response) => { resolve(response.data); })
        .catch((error: AxiosError) => {
          if (error.response != null) {
            reject(error.response.data);
          }
          reject(error);
        });
    });
  }
}
