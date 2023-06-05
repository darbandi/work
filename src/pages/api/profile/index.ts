import { NextApiRequest, NextApiResponse } from 'next'
import { createProfile, getAllProfiles } from '@/controllers'
import { apiConnection, checkAuth } from '@/tools'
import dbConnect from '@/lib/dbConnect'

const handler = apiConnection
  .use(async (req, res, next) => {
    await checkAuth(req, res)
    await dbConnect()
    return next()
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await getAllProfiles(req, res)
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    await createProfile(req, res)
  })

export default handler
