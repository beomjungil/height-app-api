import axios, { type AxiosInstance, type AxiosError } from 'axios';
import { type HeightConfig } from './HeightConfig';
import { type ApiConfig, Methods } from './Methods';

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

  public async apiRequest (config: ApiConfig, request: Record<string, unknown> | void): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.api.request({
        method: config.method,
        url: config.endpoint,
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        data: request ? JSON.stringify(request) : undefined,
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
