/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Tasks belong to one list. To create tasks, it's necessary to know in which list you want to create them.
 */
export type ListObject = {
  /**
   * The unique id of the list (UUIDv4)
   */
  id: string;
  /**
   * The model is always `list`
   */
  model: 'list';
  /**
   * - `list`: a list that contains tasks. You can only create tasks in this type of list directly.
   * - `smartlist`: a smart list use filters to find tasks across different lists
   * - `user`: a special smart list that displays tasks assigned to a user
   * - `inbox`: a special smart list to display recent conversations
   * - `search`: a special smart list to search tasks
   */
  type: 'list' | 'smartlist' | 'user' | 'inbox' | 'search';
  /**
   * The unique key of your list is used as their url.
   *
   * If the key is `general`, the url will be: `https://your-workspace.height.app/general`
   *
   * Keys need to respect these rules:
   *
   * - valid characters are: lower-case letters, dashes and numbers
   * - needs to start with a lower-case letter
   * - key is unique across the workspace
   */
  key: string;
  /**
   * The description of the list. It can be an empty string.
   */
  description: string;
  /**
   * The url of the list.
   */
  url: string;
  appearance: {
    /**
     * URL of the list icon
     */
    iconUrl: string;
    /**
     * hue of the list color
     */
    hue?: number | null;
  };
};

