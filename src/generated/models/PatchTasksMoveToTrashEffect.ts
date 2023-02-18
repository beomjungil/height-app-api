/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Move trash to the task
 */
export type PatchTasksMoveToTrashEffect = {
  type: 'trashState';
  trashState: 'trash';
  /**
   * ISO 8601 date-time
   */
  trashStateEffectAt: string;
};

