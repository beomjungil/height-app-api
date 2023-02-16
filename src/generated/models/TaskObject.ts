/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskObject = {
  /**
   * The unique id of the task
   */
  id: string;
  /**
   * The model is always `task`
   */
  model: 'task';
  /**
   * The task index. For example, if the task is T-123, its index is 123.
   */
  index: number;
  /**
   * Tasks belong to one or more lists. To create tasks, it's necessary to know in which list you want to create them.
   */
  listIds: Array<string>;
  /**
   * The name of the task.
   */
  name: string;
  /**
   * The description of the task. It's only retrieved if you use include. See ['Get a task'](https://www.notion.so/Get-a-task-8afda1c08e7f4f07a5c53720710cf24e).
   */
  description: string;
  /**
   * The status of the task.
   * - `backLog`
   * - `inProgress`
   * - `done`
   * - and any *UUID* of available statuses. You can find the *UUIDs* through the field template API.
   */
  status: string;
  /**
   * The assignees of the task. You can find the UUIDs of users through the users API.
   * ['List all users'](https://www.notion.so/List-all-users-ea66d04e48534b32927903c4deee58e8)
   */
  assigneesIds: Array<string>;
  fields: Array<{
    /**
     * The id of the appropriate field template
     */
    fieldTemplateId: string;
    /**
     * For text fields: the text value of the field. For select fields: the id of the selected option
     */
    value?: string;
    /**
     * For date fields: the date value of the field
     */
    date?: string;
    /**
     * For labels fields: the labels of the field
     */
    labels?: Array<string>;
    /**
     * For linkedTasks fields: the tasks to be linked, in the format: { "id": "UUID", "index": number }
     */
    linkedTasks?: Array<{
      id?: string;
      index?: number;
    }>;
  }>;
  /**
   * If the task was deleted.
   */
  deleted: boolean;
  /**
   * The date at which the task was deleted.
   */
  deletedAt: string;
  /**
   * The user that deleted the task.
   */
  deletedByUserId: string;
  /**
   * If the status is considered as completed (i.e. `done`), the value will be `true`.
   */
  completed: boolean;
  completedAt: string;
  createdAt: string;
  /**
   * The user that created the task.
   */
  createdUserId: string;
  lastActivityAt: string;
  /**
   * The URL of the task.
   */
  url: string;
  /**
   * A timestamp when the task was moved to the trash. Tasks are deleted after 30 days in the trash. This will be null unless the task is currently in the trash or deleted.
   */
  trashedAt: string;
  /**
   * The id of the user that moved the task to the trash
   */
  trashedByUserId: string;
  /**
   * If the task is a subtask of another task, `parentTaskId` will be the id of the parent task.
   */
  parentTaskId?: string;
};

