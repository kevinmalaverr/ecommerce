import React, { useContext } from 'react'
import styles from 'styles/components/ProductList.module.css'
import ProductCard from './ProductCard'
import { useStore } from 'context/Store'

const ProductList: React.FC = () => {
  const {
    state: { products },
  } = useStore()

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList
