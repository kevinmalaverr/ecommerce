import Head from 'next/head'
import styles from '@/styles/components'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>furniture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <section>
          <Hero />
        </section>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quibusdam illo, voluptate
        voluptates cupiditate illum commodi iure natus ea consectetur officiis dolorem ex dolor quis
        quod, sint at inventore molestiae.
      </main>
    </div>
  )
}
