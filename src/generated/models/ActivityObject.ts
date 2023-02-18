/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActivityObject = {
  /**
   * The unique id of the activity.
   */
  id: string;
  /**
   * The model is always `activity`.
   */
  model: string;
  /**
   * The date when the activity was created. See [Date formats](https://www.notion.so/API-documentation-643aea5bf01742de9232e5971cb4afda).
   */
  createdAt: string;
  /**
   * The task id of the task this activity is linked to.
   */
  taskId: string;
  /**
   * The user id that posted that activity.
   */
  createdUserId: string;
  /**
   * The type of the activity.
   */
  type: 'comment' | 'description' | 'createdAt' | 'statusChange' | 'statusRemoved' | 'assigneeChange' | 'listsChange' | 'nameChange' | 'customFieldChange' | 'fieldOptionRemoved';
  /**
   * The message/body of this comment/description.
   */
  message?: string;
  /**
   * For updates, this is the value before the change.
   */
  oldValue?: string;
  /**
   * For status, this is the value after the change.
   */
  newValue?: string;
  /**
   * An array of reactjis.
   */
  reactjis: Array<{
    /**
     * The id of the reactji.
     */
    id?: string;
    /**
     * Always set to `reactji`.
     */
    model?: string;
    /**
     * The emoji used for the reactji.
     */
    emoji?: string;
    /**
     * The user id that added the reactji.
     */
    userId?: string;
    /**
     * The id of the activity the reactji was added to.
     */
    activityId?: string;
  }>;
  /**
   * The user ids that read this activity.
   */
  readUserIds: Array<string>;
  /**
   * The url of the activity.
   */
  url: string;
};

