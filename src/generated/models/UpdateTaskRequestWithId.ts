/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateTaskRequest } from './UpdateTaskRequest';

export type UpdateTaskRequestWithId = (UpdateTaskRequest & {
  /**
   * task index (number) or task id (UUID)
   */
  id: string;
});

