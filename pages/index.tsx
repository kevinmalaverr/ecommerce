import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AppContext from '../context/AppContext'
import { useContext } from 'react'
import cart from './cart'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>furniture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/cart">
          <a>About</a>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
