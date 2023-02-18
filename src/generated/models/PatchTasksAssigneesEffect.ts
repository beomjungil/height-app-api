/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Update assignees
 */
export type PatchTasksAssigneesEffect = {
  type: 'assignees';
  /**
   * An array of UUIDs of the users assigned to the task (optional).
   */
  assigneesIds: Array<{
    add?: Array<string>;
    remove?: Array<string>;
  }>;
};

