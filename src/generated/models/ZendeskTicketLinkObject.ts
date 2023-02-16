/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ZendeskTicketLinkObject = {
  /**
   * The URL of the Zendesk ticket.
   */
  url: string;
  metadata: {
    /**
     * The type of the metadata.
     */
    type: 'zendeskTicket';
    /**
     * The ID of the Zendesk ticket.
     */
    ticketId: number;
    /**
     * The subject of the Zendesk ticket.
     */
    subject?: string;
    /**
     * The description of the Zendesk ticket.
     */
    description?: string;
  };
};

