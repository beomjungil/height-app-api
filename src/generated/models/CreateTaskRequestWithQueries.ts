/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateTaskRequest } from './CreateTaskRequest';

export type CreateTaskRequestWithQueries = (CreateTaskRequest & {
  /**
   * (defaults to true) - use false when migrating tasks
   */
  realtime?: boolean;
  /**
   * (defaults to true) - use false when migrating tasks
   */
  notifyUsers?: boolean;
});

