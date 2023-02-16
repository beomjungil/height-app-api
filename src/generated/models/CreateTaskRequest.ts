/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTaskRequest = {
  name: string;
  /**
   * An array of UUIDs (one or more)
   */
  listIds: Array<string>;
  description?: string;
  status?: string;
  /**
   * An array of UUIDs of the users assigned to the task (optional).
   */
  assigneesIds?: Array<string>;
  /**
   * The UUID of the parent task (optional).
   */
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
  /**
   * Inserts the task at the right place in the list.
   */
  orderIntent?: {
    intent?: 'start' | 'end' | 'before' | 'after';
    /**
     * (only used for before and after intent)
     */
    taskId?: string;
  };
};

