import {
  type CreateTaskRequestWithQueries,
  type PatchTasksRequest,
  type PatchTasksResponse,
  type SearchTasksRequest,
  type ListObject,
  type UpdateListRequestWithId,
  type UpdateTaskRequestWithId,
  type GetTaskRequestWithId,
  type MoveTasksRequest,
  type ListActivitiesRequest,
  type ListActivitiesResponse,
  type PostMessageRequest,
  type ActivityObject,
  type ListAllFieldTemplatesResponse,
  type CreateFieldTemplateOptionRequestWithId,
  type FieldTemplateObject,
  type UpdateFieldTemplateOptionRequestWithId,
  type CreateTaskFromTaskFormRequestWithIdQueries,
  type TaskFormObject,
  type ListAllUsersResponse,
  type GetUserRequest,
  type UserObject,
  type ListAllGroupsResponse,
  type ListAllSecurityLogEventsResponse,
  type TaskObject,
  type CreateListRequest,
  type ListAllResponse,
  type WorkspaceObject,
  type SearchTasksResponse,
} from './generated';

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
    update: createApiCall<UpdateListRequestWithId, ListObject>(this, { endpoint: '/lists/:id', method: 'PUT' }),
    all: createApiCall<void, ListAllResponse>(this, { endpoint: '/lists', method: 'GET' }),
  };

  public readonly tasks = {
    create: createApiCall<CreateTaskRequestWithQueries, TaskObject>(this, { endpoint: '/tasks', method: 'POST' }),
    patch: createApiCall<PatchTasksRequest, PatchTasksResponse>(this, { endpoint: '/tasks', method: 'PATCH' }),
    search: createApiCall<SearchTasksRequest, SearchTasksResponse>(this, { endpoint: '/tasks', method: 'GET' }),
    update: createApiCall<UpdateTaskRequestWithId, TaskObject>(this, { endpoint: '/tasks/:id', method: 'PATCH' }),
    get: createApiCall<GetTaskRequestWithId, TaskObject>(this, { endpoint: '/tasks/:id', method: 'GET' }),
    move: createApiCall<MoveTasksRequest, TaskObject>(this, { endpoint: '/tasks/move', method: 'PUT' }),
  };

  public readonly activities = {
    get: createApiCall<ListActivitiesRequest, ListActivitiesResponse>(this, { endpoint: '/activities', method: 'GET' }),
    post: createApiCall<PostMessageRequest, ActivityObject>(this, { endpoint: '/activities', method: 'POST' }),
  };

  public readonly fieldTemplates = {
    all: createApiCall<void, ListAllFieldTemplatesResponse>(this, { endpoint: '/fieldTemplates', method: 'GET' }),
    createOption: createApiCall<CreateFieldTemplateOptionRequestWithId, FieldTemplateObject>(this, { endpoint: '/fieldTemplates/:id/options', method: 'POST' }),
    updateOption: createApiCall<UpdateFieldTemplateOptionRequestWithId, FieldTemplateObject>(this, { endpoint: '/fieldTemplates/:id/options/:optionId', method: 'PUT' }),
  };

  public readonly taskForms = {
    createTask: createApiCall<CreateTaskFromTaskFormRequestWithIdQueries, TaskFormObject>(this, { endpoint: '/taskForms/:id/answers', method: 'POST' }),
  };

  public readonly users = {
    all: createApiCall<void, ListAllUsersResponse>(this, { endpoint: '/users', method: 'GET' }),
    get: createApiCall<GetUserRequest, UserObject>(this, { endpoint: '/users/:id', method: 'GET' }),
    me: createApiCall<void, UserObject>(this, { endpoint: '/users/me', method: 'GET' }),
  };

  public readonly groups = {
    all: createApiCall<void, ListAllGroupsResponse>(this, { endpoint: '/groups', method: 'GET' }),
  };

  public readonly securityLogEvents = {
    all: createApiCall<void, ListAllSecurityLogEventsResponse>(this, { endpoint: '/securityLogEvents', method: 'GET' }),
  };

  public readonly workspace = {
    get: createApiCall<void, WorkspaceObject>(this, { endpoint: '/workspace', method: 'GET' }),
  };
}
