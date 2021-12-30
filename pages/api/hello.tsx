// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma-client'

export default function hello(req: NextApiRequest, res : NextApiResponse) {
  
  res.status(200).json({ name: 'John Doe' })
}
