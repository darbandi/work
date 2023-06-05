import { NextApiRequest, NextApiResponse } from 'next'
import { deleteProfile, getProfileById, updateProfile } from '@/controllers'
import { apiConnection, checkAuth } from '@/tools'
import dbConnect from '@/lib/dbConnect'

const handler = apiConnection
  .use(async (req, res, next) => {
    await checkAuth(req, res)
    await dbConnect()
    return next()
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await getProfileById(req, res)
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    await updateProfile(req, res)
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    await deleteProfile(req, res)
  })

export default handler
