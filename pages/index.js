import { getProductsInCollection } from "../lib/shopify"
import ProductList from "../components/ProductList"
import Hero from "../components/Hero"
import Head from 'next/head'


export default function Home({ products }) {

  return (
    <div className="">
      <Head>
        <title>Sircles</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="sircles" />
        <meta property="og:title" content="sircles" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sircles.com" />
        <meta property="og:image" content="https://www.sircles.com/" />
        <meta property="og:description"
          content="sircles" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="sircles" />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}