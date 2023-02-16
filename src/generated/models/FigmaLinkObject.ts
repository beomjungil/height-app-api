/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FigmaLinkObject = {
  /**
   * The URL of the Figma link.
   */
  url: string;
  metadata: {
    /**
     * The type of the metadata.
     */
    type: 'figmaLink';
    /**
     * The Figma document.
     */
    document?: {
      /**
       * The ID of the Figma document.
       */
      id: string;
      /**
       * The name of the Figma document (optional).
       */
      name?: string;
    };
    /**
     * The file key of the Figma document.
     */
    fileKey: string;
    page?: ({
      /**
       * The ID of the Figma page.
       */
      id: string;
      /**
       * The name of the Figma page (optional).
       */
      name?: string;
    } | null);
    frame?: ({
      /**
       * The ID of the Figma frame.
       */
      id: string;
      /**
       * The name of the Figma frame (optional).
       */
      name?: string;
    } | null);
  };
};

