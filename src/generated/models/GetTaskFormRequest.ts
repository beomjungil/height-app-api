/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetTaskFormRequest = {
  urlKey: string;
  /**
   * One of key or urlKey, defaulting to id
   */
  keyType?: 'key' | 'urlKey';
  /**
   * Array of task form includes
   */
  include?: Array<'RestrictedUsers' | 'RestrictedLists' | 'FieldTemplates' | 'SubtaskForms' | 'Questions' | 'Fields'>;
  /**
   * only look for archived or unarchived forms
   */
  archived?: boolean;
  /**
   * only look for archived or unarchived forms
   */
  draft?: boolean;
};

