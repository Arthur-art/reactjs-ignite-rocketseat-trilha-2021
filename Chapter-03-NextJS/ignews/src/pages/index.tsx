import { GetServerSideProps } from "next"
import Head from "next/head"
import { SubscribeButton } from "../components/SubscribeButton"
import { stripe } from "../service/stripe"
import styles from "./home.module.scss"

type Products = {
  priceId: string;
  amount: number;
}
interface HomeProps {
  product: Products
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey welcome!</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  // Id do preço
  const price = await stripe.prices.retrieve("price_1JLWW4HvuE7HOtwv0D29ZgPn", {
    expand: ["product"]
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    }
  }
}
