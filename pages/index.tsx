import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import AppContext from '../context/AppContext'
import {useContext} from 'react'
import cart from './cart';

export default function Home(){
  const {addToCart, state: {cart}} = useContext(AppContext)

  return (
    <div className={styles.container}>
      <Head>
        <title>furniture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          cart.map(item=>(
            <button onClick={()=>{addToCart(item)}}>{ item.name}</button>
          ))
        }
      <Link href="/cart">
        <a>About</a>
      </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
