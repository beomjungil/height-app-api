/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Update parent task
 */
export type PatchTasksParentTaskEffect = {
  type: 'parentTask';
  /**
   * The UUID of the parent task (optional).
   */
  parentTaskId?: string | null;
};

