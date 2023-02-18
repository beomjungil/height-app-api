/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Update status
 */
export type PatchTasksStatusEffect = {
  type: 'status';
  /**
   * The status of the task.
   * - `backLog`
   * - `inProgress`
   * - `done`
   * - and any *UUID* of available statuses. You can find the *UUIDs* through the field template API.
   */
  status: string;
  /**
   * ISO 8601 date-time
   */
  completedAt?: string;
};

