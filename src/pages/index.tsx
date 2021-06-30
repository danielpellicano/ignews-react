import Head from 'next/head';
import { Fragment } from 'react';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';
function HomePage() {
    return (
      <Fragment>
      <Head>
        <title>Home | IGNEWS 1</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👍 Hey, welcome </span>
          <h1>News about the <span>React</span> world</h1>

          <p>
            Get access to all the publications <br />
            <span>fofr R9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </Fragment>
    )
  }
  
export default HomePage