import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const stack = ['React 19', 'Vite', 'React Router 7', 'Bootstrap 5', 'Context API'];

const features = [
  {
    icon: '🔐',
    title: 'Authentication',
    text: 'Sign up, sign in and log out, with the session stored in localStorage.',
    to: '/docs/authentication',
  },
  {
    icon: '🧭',
    title: 'Routing',
    text: 'Public, protected and dynamic routes, all declared in one place.',
    to: '/docs/routing',
  },
  {
    icon: '🧱',
    title: 'Layout and Sidebar',
    text: 'A config-driven sidebar with headings, links and expandable submenus.',
    to: '/docs/layout-and-sidebar',
  },
  {
    icon: '📊',
    title: 'State and Data',
    text: 'Context providers, dashboard data and the Explorer API service.',
    to: '/docs/state-and-data',
  },
  {
    icon: '📁',
    title: 'Project Structure',
    text: 'A quick tour of every folder so you always know where things live.',
    to: '/docs/project-structure',
  },
  {
    icon: '🛠️',
    title: 'Known Issues',
    text: 'Current limitations, each with a ready-to-use fix.',
    to: '/docs/known-issues',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <span className={styles.badge}>Admin Dashboard Documentation</span>
            <h1 className={styles.title}>{siteConfig.title}</h1>
            <p className={styles.tagline}>{siteConfig.tagline}</p>

            <div className={styles.buttons}>
              <Link className={styles.primaryButton} to="/docs/intro">
                Get Started
              </Link>
              <Link
                className={styles.secondaryButton}
                href="https://github.com/Tripathi-Ashu/React-Journey/tree/main/React5">
                View Source
              </Link>
            </div>

            <ul className={styles.stack}>
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </header>

        <main>
          <section className={styles.features}>
            <div className="container">
              <h2 className={styles.sectionTitle}>Explore the docs</h2>
              <p className={styles.sectionText}>
                Everything you need to understand, run and extend the app.
              </p>
              <div className={styles.grid}>
                {features.map((feature) => (
                  <Link key={feature.title} className={styles.card} to={feature.to}>
                    <span className={styles.icon}>{feature.icon}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                    <span className={styles.more}>Read more →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.quick}>
            <div className="container">
              <h2 className={styles.sectionTitle}>Run it in a minute</h2>
              <p className={styles.sectionText}>Clone the repo, install and start the dev server.</p>
              <div className={styles.terminal}>
                <div className={styles.terminalBar}>
                  <span />
                  <span />
                  <span />
                </div>
                <pre className={styles.code}>
                  <code>{`git clone https://github.com/Tripathi-Ashu/React-Journey.git
cd React-Journey/React5
npm install
npm run dev`}</code>
                </pre>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}