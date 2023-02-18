import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Highlight, { defaultProps } from 'prism-react-renderer';

import styles from './index.module.css';

/* eslint-disable */
const exampleCodes = [
  `
import Height from 'height-app-api';

const height = new Height({ secretKey: 'secret_yoursecretkey' });

const uncompletedTasks = await height.tasks.search({
  filters: {
    status: {
      "values": ["backLog", "inProgress"],
    }
  }
});

return uncompletedTasks;
`,
  `
import Height from 'height-app-api';

const height = new Height({ secretKey: 'secret_yoursecretkey' });

const allLists = await height.lists.all();

return allLists;
`,
  `
import Height from 'height-app-api';

const height = new Height({ secretKey: 'secret_yoursecretkey' });

await height.activities.post({
  taskId: 'c4d32ead-61d8-4e4e-860b-0692f5101f63',
  type: 'comment',
  message: 'Hey @user_123, this is a message with a mention!';
});
`,
];

const exampleCodeLabels = [
  'Search Uncompleted Tasks',
  'Get all Lists',
  'Post a message',
]
/* eslint-enable */

function HomepageHeader () {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    document.documentElement.classList.add(styles.clearHeader);

    return () => {
      document.documentElement.classList.remove(styles.clearHeader);
    };
  });

  return (
    <>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx(styles.heroTitle)}>
            Unofficial Typescript<br />
            <span className={styles.gradient}>Height API Wrapper</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Powerful package that enables developers to easily integrate and utilize the Height API
          </p>
          <div className={styles.buttons}>
            <Link
              className={styles.primaryButton}
              to="/docs/intro">
              Get Started
            </Link>
            <Link
              className={styles.secondaryButton}
              href="https://height.app">
              Try Height
            </Link>
          </div>
        </div>

      </header>
      <div className={styles.editorContainer}>
        <div className={styles.editor}>
          <div className={styles.tabContainer}>
            {
              exampleCodeLabels.map((label, index) => (
                <button
                  className={clsx(styles.tab, index === activeTab ? styles.activeTab : '')}
                  onClick={() => setActiveTab(index)}
                >
                  {label}
                </button>
              ))
            }
          </div>
          <Highlight {...defaultProps} code={exampleCodes[activeTab]} language="typescript">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </>
  );
}

export default function Home (): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.hero}>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
