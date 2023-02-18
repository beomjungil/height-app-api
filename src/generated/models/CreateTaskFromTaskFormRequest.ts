/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTaskFromTaskFormRequest = {
  /**
   * Array of question responses
   */
  answers?: Array<{
    /**
     * The id of the task form question
     */
    questionId?: string;
    /**
     * The name of the task - required when the question is for the task name
     */
    name?: string;
    /**
     * The id of the status of the task - required when the question is for the task status
     */
    status?: string;
    /**
     * The ids of the assignees of the task - required when the question is for the task assignees.
     */
    assigneesIds?: Array<string>;
    /**
     * The ids of the lists of the task - required when the question is for the lists
     */
    listIds?: Array<string>;
    /**
     * The description of the string. Accepts markdown. Required when the question is for the description
     */
    description?: string;
    /**
     * TaskField Attributes (optional) Required to belong to the attribute associated with the question. See the Task Object for specifications
     */
    field?: {
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
    };
  }>;
};

