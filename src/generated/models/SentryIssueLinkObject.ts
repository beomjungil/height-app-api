/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SentryIssueLinkObject = {
  metadata: {
    /**
     * The type of the metadata.
     */
    type: 'sentryIssue';
    /**
     * The Sentry project.
     */
    project: {
      /**
       * The slug of the Sentry project.
       */
      slug: string;
      /**
       * The ID of the Sentry project.
       */
      id: string;
    };
    /**
     * The ID of the Sentry issue.
     */
    issueId: string;
  };
};

