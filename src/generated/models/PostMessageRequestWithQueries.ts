/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PostMessageRequest } from './PostMessageRequest';

export type PostMessageRequestWithQueries = (PostMessageRequest & {
  queryParams?: {
    /**
     * (defaults to true) - use false when migrating messages
     */
    realtime?: boolean;
    /**
     * (defaults to true) - use false when migrating messages
     */
    notifyUsers?: boolean;
  };
});

