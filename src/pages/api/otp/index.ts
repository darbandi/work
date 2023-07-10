import { NextApiRequest, NextApiResponse } from 'next'
import { getOtp, sendOtp } from '@/controllers'
import { apiConnection } from '@/tools'
import dbConnect from '@/lib/dbConnect'

const handler = apiConnection
  .use(async (req, res, next) => {
    await dbConnect()
    return next()
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    return getOtp(req, res)
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    return sendOtp(req, res)
  })

export default handler
