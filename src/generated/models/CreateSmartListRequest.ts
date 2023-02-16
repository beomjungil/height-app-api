/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FiltersObject } from './FiltersObject';

/**
 * Create a smartlist
 */
export type CreateSmartListRequest = {
  name: string;
  type: 'list' | 'smartlist';
  description?: string;
  filters: FiltersObject;
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

