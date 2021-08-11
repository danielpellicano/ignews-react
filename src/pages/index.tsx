import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

function HomePage({product} :HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </Fragment>
    )
  }
  
export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1J9sB2Hw2S1apk0kyxf0HwED')

  const product = {
      priceId: price.id,
      amount: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }

}