/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Update fields
 */
export type PatchTasksFieldsEffect = {
  type: 'fields';
  fieldTemplateId: string;
  fields: {
    /**
     * The value of the field when the template type is text.
     */
    text?: string | null;
    /**
     * The value of the field when the template type is date.
     */
    date?: string | null;
    /**
     * recursion
     * Untyped. Should be documented in [original docs](https://www.notion.so/Update-tasks-53d72cb0059a4e0e81cc2fcbfcbf9d0a)
     */
    recursion?: any | null;
    /**
     * The label value of the field when the template type is select.
     */
    label?: {
      optionId?: string;
    };
    /**
     * The label values of the field when the template type is labels.
     */
    labels?: {
      add?: Array<{
        /**
         * The ID for the label to add.
         */
        id: string;
      }>;
      remove?: Array<{
        /**
         * The ID for the label to remove.
         */
        id: string;
      }>;
    };
    /**
     * The linked tasks value of the field when the template type is linkedTask or reverseLinkedTask.
     */
    linkedTasks?: {
      add?: Array<{
        /**
         * The ID for the task to add.
         */
        id: string;
        /**
         * The index for the task to add.
         */
        index?: number;
      }>;
      remove?: Array<{
        /**
         * The ID for the task to remove.
         */
        id: string;
        /**
         * The index for the task to remove.
         */
        index?: number;
      }>;
    };
  };
  /**
   * The user IDs of the field when the template type is users.
   */
  userIds?: {
    add?: Array<string>;
    remove?: Array<string>;
  };
};

