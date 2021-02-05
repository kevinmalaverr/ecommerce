import React from 'react'
import ProductCard from './ProductCard'
import { products } from '@/__mocks__/products'

const ProductList = () => {
  console.log(products)
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList
