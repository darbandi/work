import { NextApiRequest, NextApiResponse } from 'next'
import { deleteUser, getUserById, updateUser } from '@/controllers'
import { apiConnection, checkAuth } from '@/tools'
import dbConnect from '@/lib/dbConnect'

const handler = apiConnection
  .use(async (req, res, next) => {
    await dbConnect()
    return next()
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    // await checkAuth(req, res)
    await getUserById(req, res)
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await updateUser(req, res)
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await deleteUser(req, res)
  })

export default handler
