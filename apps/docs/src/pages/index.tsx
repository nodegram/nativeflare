import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/nativeflare-logo.png" alt="NativeFlare Logo" width="100" height="100" />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/introduction">
            Start now ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="NativeFlare - React Native Components Collection"
      description="NativeFlare is a collection of React Native components that are built with performance and accessibility in mind. Built on top of NativeWind and TailwindCSS."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
