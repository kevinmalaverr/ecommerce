import React from 'react'
import styles from '@/styles/components/Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { numberToPrice } from 'utils/numberFormat'

const Hero = ({ productPinned }: { productPinned: any }): JSX.Element => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h2>
            <b>{productPinned.label}</b>
          </h2>
          <h1>{productPinned.product.name}</h1>
          <h2>
            DESDE <b className={styles.price}>{numberToPrice(productPinned.product.price)}</b>
          </h2>
          <div>
            <Link href={`/product/${productPinned.product.id}`}>
              <a className="btn-1 my-6">Comprar ahora</a>
            </Link>
          </div>
        </div>
        {productPinned.product.images.length > 0 ? (
          <Image
            src={productPinned.product.images[0].url}
            width={productPinned.product.images[0].width}
            height={productPinned.product.images[0].height}
          />
        ) : null}
      </div>
    </section>
  )
}

export default Hero
