/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetTaskRequest } from './GetTaskRequest';

export type GetTaskRequestWithId = (GetTaskRequest & {
  /**
   * task index (number) or task id (UUID)
   */
  id: string;
});

