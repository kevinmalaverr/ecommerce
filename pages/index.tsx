import Head from 'next/head'
import styles from '@/styles/components'
import Hero from '@/components/Hero'
import ProductList from '@/components/ProductList'

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
