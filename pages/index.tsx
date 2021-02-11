import Head from 'next/head'
import styles from '@/styles/components/Home.module.css'
import Hero from '@/components/Hero'
import ProductList from '@/components/ProductList'
import { fetchData } from '@/utils/fetchData'

export default function Home() {
  return (
    <div>
      <Head>
        <title>furniture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main className="container">
        <ProductList />
      </main>
    </div>
  )
}

export async function getStaticProps(): Promise<{ props: { products: Array<any> } }> {
  const data = await fetchData('products')

  return {
    props: {
      products: data,
    }, // will be passed to the page component as props
  }
}
