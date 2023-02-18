/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GroupObject = {
  /**
   * The unique ID of the group.
   */
  id: string;
  /**
   * The model is always `group`.
   */
  model: 'group';
  /**
   * The name of the group.
   */
  name: string;
  /**
   * The handle of the group.
   */
  handle: string;
  /**
   * The color/hue (0-360) of the group.
   */
  hue: number;
  /**
   * The list of user IDs that are in the group.
   */
  userIds: Array<string>;
  /**
   * Flag to indicate whether the group is archived.
   */
  archived: boolean;
};

