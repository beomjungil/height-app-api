/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FieldTemplateObject = {
  /**
   * The unique id of the field template.
   */
  id: string;
  /**
   * The model is always `fieldTemplate`.
   */
  model: 'fieldTemplate';
  /**
   * The name of the field template.
   */
  name: string;
  /**
   * Possible types:
   *
   * - `text`: any text value attribute (i.e. Story Points)
   * - `labels`: used for tags for example
   * - `select`: used for priority, sprint,…
   * - `date`: used for due date,…
   * - `linkedTasks`: usually used for dependencies and so on
   * - `status`: the status attribute (only one field template of that type)
   */
  type: 'text' | 'labels' | 'select' | 'date' | 'linkedTasks' | 'status';
  /**
   * An array of label sets, only available when the type of the field template is `status`.
   */
  labelSets?: Array<{
    /**
     * The unique id of the field label set.
     */
    id: string;
    /**
     * The model is always `fieldLabelSet`.
     */
    model: 'fieldLabelSet';
    /**
     * The name of the field label set.
     */
    value: string;
  }>;
  /**
   * Only available when the type of the field template is `labels`, `select` or `status`.
   */
  labels?: Array<{
    /**
     * UUID or string (backLog, inProgress and done are hard-coded).
     */
    id: string;
    /**
     * The model is always `fieldLabel`.
     */
    model: 'fieldLabel';
    /**
     * The name of the label.
     */
    value: string;
    /**
     * The hue of the label's color (between 0 and 360).
     */
    hue: number;
    /**
     * The id of the label set this label belongs to, if any. Only if the type of field template is `status`.
     */
    labelSetId?: string;
    /**
     * The state of the status, only available when the type of the field template is `status`.
     * Note that a task is considered as completed if its status has a state of `canceled` or `completed`.
     */
    statusState: 'default' | 'started' | 'blocked' | 'canceled' | 'completed';
  }>;
  /**
   * This attribute has been archived.
   */
  archive: boolean;
};

