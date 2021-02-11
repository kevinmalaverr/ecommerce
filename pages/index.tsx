import Head from 'next/head'
import styles from '@/styles/components/Home.module.css'
import Hero from '@/components/Hero'
import ProductList from '@/components/ProductList'
import { fetchData } from '@/utils/fetchData'

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

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
        <WhatsAppWidget
          textReplyTime="activo"
          companyName="Muebles Willys"
          message={`¡Hola! 👋🏼\n¿En qué te puedo ayudar?`}
          sendButton="Enviar"
          phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_PHONE}
        />
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
