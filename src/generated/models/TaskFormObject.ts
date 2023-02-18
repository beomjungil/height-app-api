/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Uncertain typed. Height team did't provide schema for Task Form.
 */
export type TaskFormObject = {
  /**
   * The ID of the task form.
   */
  id?: string;
  /**
   * always "taskForm"
   */
  model?: 'taskForm';
  /**
   * The version of the task form.
   */
  version?: number;
  /**
   * The key of the task form.
   */
  key?: string;
  /**
   * The URL key of the task form.
   */
  urlKey?: string;
  /**
   * The URL of the task form.
   */
  url?: string;
  /**
   * The name of the task form.
   */
  name?: string;
  /**
   * The description of the task form.
   */
  taskFormDescription?: string;
  /**
   * The reason why the task form is disabled.
   */
  disabledReason?: string | null;
  /**
   * Flag to indicate whether the task form is archived.
   */
  archived?: boolean;
  /**
   * Flag to indicate whether the task form is a draft.
   */
  draft?: boolean;
  /**
   * The type of public access for the task form.
   */
  publicAccess?: string;
  /**
   * The IDs of the lists associated with the task form.
   */
  listIds?: Array<string>;
  /**
   * The ID of the parent task.
   */
  parentTaskId?: string | null;
  /**
   * The status of the task.
   * - `backLog`
   * - `inProgress`
   * - `done`
   * - and any *UUID* of available statuses. You can find the *UUIDs* through the field template API.
   */
  status?: string;
  questions?: Array<{
    /**
     * The ID of the question.
     */
    id?: string;
    /**
     * The ID of the field.
     */
    fieldId?: string;
    /**
     * The value of the question.
     */
    value?: string;
    /**
     * Flag to indicate whether the question is required.
     */
    required?: boolean;
    /**
     * The placeholder for the question.
     */
    placeholder?: string | null;
    /**
     * The IDs of the restricted labels for the question.
     */
    restrictedLabelIds?: Array<string>;
    /**
     * Flag to indicate whether the question accepts multiple labels.
     */
    multipleLabels?: boolean;
  }>;
};

