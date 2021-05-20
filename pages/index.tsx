import Head from 'next/head'
import styles from '@/styles/components/Home.module.css'
import Hero from '@/components/Hero'
import ProductList from '@/components/ProductList'
import { fetchData } from '@/utils/fetchData'

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import Services from '@/components/Services'

export default function Home({ productPinned }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Muebles Willys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero productPinned={productPinned} />
      <main className="container">
        <h2 className="text-2xl font-bold font-playfair my-6 text-center">
          Explora nuestros muebles
        </h2>
        <ProductList />
        <h2 className="text-2xl font-bold font-playfair my-6 text-center">Servicios</h2>
        <Services />
      </main>
      <WhatsAppWidget
        textReplyTime="activo"
        companyName="Muebles Willys"
        message={`¡Hola! 👋🏼\n¿En qué te puedo ayudar?`}
        sendButton="Enviar"
        phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_PHONE}
      />
    </div>
  )
}

export async function getStaticProps(): Promise<{ props: object }> {
  const productPinned = await fetchData('product-pinned')
  return {
    props: {
      productPinned,
    },
  }
}
