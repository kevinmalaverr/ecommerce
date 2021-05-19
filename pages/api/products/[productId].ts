import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { method } = req

  switch (method) {
    case 'GET':
      getProductId(req, res)
      break
    case 'POST':
      postProductId(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}

const getProductId = (req: NextApiRequest, res: NextApiResponse): void => {
  const { productId } = req.query

  res.status(200).json({ name: productId })
}

const postProductId = (req: NextApiRequest, res: NextApiResponse): void => {
  const { productId } = req.query

  res.status(200).json({ name: productId })
}

const ele = {}
