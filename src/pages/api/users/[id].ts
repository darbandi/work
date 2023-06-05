import { NextApiRequest, NextApiResponse } from 'next'
import { deleteUser, getUserById, updateUser } from '@/controllers'
import { apiConnection, checkAuth } from '@/tools'
import dbConnect from '@/lib/dbConnect'

const handler = apiConnection
  .use(async (req, res, next) => {
    await checkAuth(req, res)
    await dbConnect()
    return next()
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await getUserById(req, res)
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    await updateUser(req, res)
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    await deleteUser(req, res)
  })

export default handler
