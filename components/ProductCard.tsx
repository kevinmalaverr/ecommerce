import React from 'react'
import styles from '@/styles/components/ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { numberToPrice } from '@/utils/numberFormat'
import { useStore } from '@/context/Store'

const ProductCard = ({ product }): JSX.Element => {
  const { dispatch } = useStore()

  return (
    <article className={styles.productCard}>
      <Link href={`/product/${product.id}`}>
        <a className="">
          {product.images ? (
            <Image
              src={product.images[0].url}
              width={product.images[0].width}
              height={product.images[0].height}
            />
          ) : null}
        </a>
      </Link>
      <div className="px-4 py-2 text-center">
        <p className="text-xl font-bold">{product.name}</p>
        <p>
          <span className="font-medium">{numberToPrice(product.price)} </span>
          {product.oldPrice ? (
            <span className={styles.beforePrice}>{numberToPrice(product.oldPrice)}</span>
          ) : null}
        </p>
      </div>
      <button
        onClick={() => dispatch({ type: '@cart/add', payload: product })}
        className={`${styles.addToCart} btn-1`}
      >
        Añadir al carrito
      </button>
    </article>
  )
}

export default ProductCard
