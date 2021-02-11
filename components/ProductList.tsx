import React, { useContext } from 'react'
import styles from 'styles/components/ProductList.module.css'
import ProductCard from './ProductCard'
import AppContext from '../context/AppContext'

const ProductList = () => {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext)

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} handleAddToCart={addToCart} />
      ))}
    </div>
  )
}

export default ProductList
