/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SentryAlertLinkObject = {
  metadata: {
    /**
     * The type of the metadata.
     */
    type: 'sentryAlert';
    /**
     * The ID of the Sentry organization.
     */
    organizationId: string;
    /**
     * The date and time of the last alert event for the Sentry alert.
     */
    lastAlertEvent: string;
    /**
     * The ID of the alert rule for the Sentry alert.
     */
    alertRuleId: string;
    /**
     * The status of the last alert for the Sentry alert.
     */
    lastAlertStatus: 'critical' | 'warning' | 'resolved';
  };
};

