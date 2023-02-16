/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FigmaLinkObject } from './FigmaLinkObject';
import type { NotionDocumentLinkObject } from './NotionDocumentLinkObject';
import type { SentryAlertLinkObject } from './SentryAlertLinkObject';
import type { SentryIssueLinkObject } from './SentryIssueLinkObject';
import type { ZendeskTicketLinkObject } from './ZendeskTicketLinkObject';

export type LinkObjects = (ZendeskTicketLinkObject | NotionDocumentLinkObject | FigmaLinkObject | SentryIssueLinkObject | SentryAlertLinkObject);

