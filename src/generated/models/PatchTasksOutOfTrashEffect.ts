/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Move task out of the trash
 */
export type PatchTasksOutOfTrashEffect = {
  type: 'trashState';
  trashState: 'active';
  /**
   * ISO 8601 date-time
   */
  trashStateEffectAt: string;
};

