/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateTaskFromTaskFormRequest } from './CreateTaskFromTaskFormRequest';

export type CreateTaskFromTaskFormRequestWithIdQueries = (CreateTaskFromTaskFormRequest & {
  /**
   * The id of the task form
   */
  id: string;
  queryParams?: {
    /**
     * Only allowed for public task forms, and required if not authenticated
     */
    asBot?: boolean;
  };
});

