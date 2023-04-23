// import prisma from '../../lib/prisma'
// import prisma from '../prisma'
// import prisma from '../../prisma'
// import prisma from 'prisma'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { content } = req.body
    const message = await prisma.message.create({
      data: {
        content,
      },
    })
    res.json(message)
  } else if (req.method === 'GET') {
    const messages = await prisma.message.findMany()
    res.json(messages)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
