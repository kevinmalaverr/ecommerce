import axios from 'axios'

interface Product {
  id?: number
  name: string
  description: string
}

const ROUTE = `${process.env.APi_URL}/products`

async function getAll(): Promise<Product[]> {
  try {
    const response = await axios.get(ROUTE)
    return response.data
  } catch (error) {
    return error
  }
}

async function get(): Promise<Product> {
  return
}

async function order(productId) {
  return productId
}

export default {
  getAll,
  get,
  order,
}
