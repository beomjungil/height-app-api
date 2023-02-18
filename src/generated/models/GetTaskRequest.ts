/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetTaskRequest = {
  /**
   * task index (number) or task id (UUID)
   */
  id: string;
  include?: Array<'Assignees' | 'CreatedByUser' | 'CompletedByUser' | 'DeletedByUser' | 'Subscribers' | 'Fields.User' | 'Lists' | 'Status' | 'Mentions' | 'NotificationsSubscription' | 'ParentTasks' | 'SubtaskIds'>;
};

