/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NotionDocumentLinkObject = {
  /**
   * The URL of the Notion document.
   */
  url: string;
  metadata: {
    /**
     * The type of the metadata.
     */
    type: 'notionDocument';
    /**
     * The ID of the Notion page.
     */
    pageId: string;
  };
};

