import { NextApiRequest, NextApiResponse } from 'next'
import ProductsService from '../../../services/products'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const productList = await ProductsService.getAll()
  res.status(200).json(productList)
}
