/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateNormalListRequest } from './CreateNormalListRequest';
import type { CreateSmartListRequest } from './CreateSmartListRequest';

export type CreateListRequest = (CreateNormalListRequest | CreateSmartListRequest);

