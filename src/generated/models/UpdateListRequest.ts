/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateListRequest = {
  name?: string;
  description?: string;
  appearance?: {
    /**
     * the name of the icon e.g. listCircles, listBug.
     */
    icon: string;
    hue?: number;
  };
  visualization?: 'list' | 'kanban' | 'calendar' | 'gantt' | 'conversation' | 'figma';
  /**
   * string representing a date the list was archived at, in the form of an ISO 8601 date (e.g. 2011-04-11T10:20:30Z).
   */
  archivedAt?: string;
};

