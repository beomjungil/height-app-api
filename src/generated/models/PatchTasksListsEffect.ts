/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Update lists
 */
export type PatchTasksListsEffect = {
  type?: 'lists';
  /**
   * An array of UUIDs
   */
  listIds?: Array<{
    add?: Array<string>;
    remove?: Array<string>;
  }>;
};

