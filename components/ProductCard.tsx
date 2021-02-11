import React from 'react'
import style from '@/styles/components/ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { numberToPrice } from '@/utils/numberToPrice'

const ProductCard = ({ product, handleAddToCart }): JSX.Element => {
  return (
    <article className={style.productCard}>
      <Link href={`/product/${product.url}`}>
        <a>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${product.images[0].url}`}
            width={108}
            height={144}
          />
          <p>{product.name}</p>
          <p>
            {numberToPrice(product.price)}{' '}
            <span className={style.beforePrice}>{numberToPrice(990000)}</span>
          </p>
        </a>
      </Link>
      <button onClick={() => handleAddToCart(product)}>comparar</button>
    </article>
  )
}

export default ProductCard
