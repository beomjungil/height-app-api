/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnabledUserObject } from './EnabledUserObject';
import type { InvitedUserObject } from './InvitedUserObject';

export type UserObject = (EnabledUserObject & InvitedUserObject);

