import { NextApiRequest, NextApiResponse } from 'next'
import { apiConnection } from '@/tools'
import { createUser, getAllUsers } from '@/controllers'

const handler = apiConnection
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await getAllUsers(req, res)
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    await createUser(req, res)
  })

export default handler
