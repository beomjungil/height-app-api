/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostMessageRequest = {
  taskId: string;
  type: 'comment' | 'description';
  /**
   * ## Mentions
   *
   * Height supports multiple types of mentions, with each their own format:
   *
   * User mention: `@user_<userId>`
   *
   * Group mention: `@group_<groupId>`
   *
   * Task mention: `T-<taskIndex>`
   *
   * List mention: `#<listKey>`
   */
  message: string;
};

