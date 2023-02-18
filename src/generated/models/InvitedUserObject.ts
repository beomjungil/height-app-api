/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitedUserObject = {
  /**
   * The unique ID of the user.
   */
  id: string;
  /**
   * The model is always `user`.
   */
  model: 'user';
  /**
   * The state of the user.
   */
  state: 'enabled' | 'invited';
  /**
   * The email of the user.
   */
  email: string;
  access: 'member' | 'guest' | 'anonymous';
  /**
   * The date and time the user was created, see [Date formats](https://www.notion.so/API-documentation-643aea5bf01742de9232e5971cb4afda).
   */
  createdAt: string;
  /**
   * The URL of the user's picture, if available.
   */
  pictureUrl?: string;
};

