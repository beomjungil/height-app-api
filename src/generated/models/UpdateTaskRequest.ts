/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTaskRequest = {
  name: string;
  listIds?: Array<string>;
  description?: string;
  /**
   * The status of the task.
   * - `backLog`
   * - `inProgress`
   * - `done`
   * - and any *UUID* of available statuses. You can find the *UUIDs* through the field template API.
   */
  status?: string;
  assigneesIds?: Array<string>;
  parentTaskId?: string;
  fields?: Array<{
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
};

