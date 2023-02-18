/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SecurityLogEventObject = {
  /**
   * The unique ID of the event.
   */
  id: string;
  /**
   * The model is always `securityLogEvent`.
   */
  model: 'securityLogEvent';
  /**
   * The date and time the event occurred. See [Date formats](https://developers.notion.com/reference/rich-text#date-property-values).
   */
  createdAt: string;
  /**
   * The ID of the user that initiated the event.
   */
  userId: string;
  /**
   * The email of the user that initiated the event.
   */
  userEmail: string;
  /**
   * Possible values are:
   *
   * - `FieldTemplateInsert`: an attribute was created
   * - `FieldTemplateUpdate`: an attribute was updated
   * - `FieldTemplateArchive`: an attribute was archived
   * - `FieldTemplateRestore`: an attribute was restored
   * - `PermissionUpsert`: a list permission was created or updated
   * - `PermissionDelete`: a list permission was deleted
   * - `UserInvite`: an user was invited
   * - `UserSignUp`: an user signed up
   */
  eventType: 'FieldTemplateInsert' | 'FieldTemplateUpdate' | 'FieldTemplateArchive' | 'FieldTemplateRestore' | 'PermissionUpsert' | 'PermissionDelete' | 'UserInvite' | 'UserSignUp';
  /**
   * The old value of the attribute, permission, etc. that was updated or deleted.
   */
  oldValue?: any;
  /**
   * The new value of the attribute, permission, etc. that was updated or created.
   */
  newValue?: any;
};

