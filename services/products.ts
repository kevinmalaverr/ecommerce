import axios from 'axios'

interface Product {
  id: number
  name: string
  description: string
}

const route = `${process.env.APi_URL}/products`

async function getAll(): Promise<Product[]> {
  try {
    const response = axios.get(route)
    return response
  } catch (error) {
    return error
  }
}

async function get(): Product {
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
