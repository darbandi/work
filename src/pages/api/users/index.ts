import { NextApiRequest, NextApiResponse } from 'next'
import { apiConnection, checkAuth } from '@/tools'
import { createUser, getAllUsers } from '@/controllers'
import dbConnect from '@/lib/dbConnect'

const handler = apiConnection
  .use(async (req, res, next) => {
    await dbConnect()
    return next()
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await getAllUsers(req, res)
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    await createUser(req, res)
  })

export default handler
