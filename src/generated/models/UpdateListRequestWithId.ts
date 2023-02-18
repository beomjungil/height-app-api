/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateListRequest } from './UpdateListRequest';

export type UpdateListRequestWithId = (UpdateListRequest & {
  /**
   * The id of the list
   */
  id: string;
});

