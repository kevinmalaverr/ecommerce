import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case value:
      break

    default:
      break
  }

  const { productId } = req.query

  res.status(200).json({ name: productId })
}
