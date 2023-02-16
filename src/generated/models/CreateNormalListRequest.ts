/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Create a list
 */
export type CreateNormalListRequest = {
  name: string;
  type: 'list' | 'smartlist';
  description?: string;
  appearance?: {
    icon: 'list' | 'listCircles' | 'listTriangle' | 'listSquare' | 'listLines' | 'listRectangles' | 'listCircle' | 'listRocket' | 'listMushroom' | 'listBolt' | 'listBug' | 'listFlower' | 'listThumbsUp' | 'listTarget' | 'listSparkle' | 'listMedal' | 'listFlag';
    /**
     * Hue is between 0 and 360 and used to determine the color.
     *
     * If `null`, the list has no color.
     */
    hue?: number | null;
  };
  /**
   * visualization string (optional, default = list) list or kanban
   */
  visualization?: 'list' | 'kanban';
};

