/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MoveTasksRequest = {
  taskIds: Array<string>;
  /**
   * UUID of list or parent task of tasks
   */
  sourceId: string;
  orderIntent: {
    intent?: 'start' | 'end' | 'before' | 'after';
    /**
     * UUID (only used for before and after intent)
     */
    taskId?: string;
  };
};

