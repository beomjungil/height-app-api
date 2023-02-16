import { type ListObject } from './generated';
import { type CreateListRequest } from './generated/models/CreateListRequest';
import { type CreateTaskRequest } from './generated/models/CreateTaskRequest';
import { type ListAllResponse } from './generated/models/ListAllResponse';
import { type TaskObject } from './generated/models/TaskObject';
import { type UpdateListRequest } from './generated/models/UpdateListRequest';

type APIRequest = Record<string, unknown>;

type ApiCaller<Requests, Response> = (request: Requests) => Promise<Response>;

export interface ApiConfig {
  endpoint: string;
  method: string;
}

function createApiCall<Requests = void, Response = unknown> (
  self: Methods,
  config: ApiConfig,
): ApiCaller<Requests, Response> {
  return self.apiRequest.bind(self, config) as ApiCaller<Requests, Response>;
}

/**
 * Methods for Height API
 *
 * @public
 */
export abstract class Methods {
  public abstract apiRequest (config: ApiConfig, request: APIRequest): Promise<unknown>;

  public readonly lists = {
    create: createApiCall<CreateListRequest, ListObject>(this, { endpoint: '/lists', method: 'POST' }),
    update: createApiCall<UpdateListRequest, ListObject>(this, { endpoint: '/lists', method: 'PUT' }),
    all: createApiCall<void, ListAllResponse>(this, { endpoint: '/lists', method: 'GET' }),
  };

  public readonly tasks = {
    create: createApiCall<CreateTaskRequest, TaskObject>(this, { endpoint: '/tasks', method: 'POST' }),
  };
}
