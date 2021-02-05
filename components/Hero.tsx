import React from 'react'
import styles from '@/styles/components/Hero.module.css'
import Image from 'next/image'

const Hero = (): JSX.Element => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h2>
            <b>Nuevos productos</b>
          </h2>
          <h1>Nombre mueble</h1>
          <h2>
            DESDE <b className={styles.price}>$990.000</b>
          </h2>
          <button className="btn-1 my-8">Comprar Ahora</button>
        </div>
        <Image src="/images/hero.jpg" width={2000} height={1200}></Image>
      </div>
    </section>
  )
}
export default Hero
