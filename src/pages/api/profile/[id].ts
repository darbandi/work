import { NextApiRequest, NextApiResponse } from 'next'
import { deleteProfile, getProfileById, updateProfile } from '@/controllers'
import { apiConnection, checkAuth } from '@/tools'

const handler = apiConnection
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await getProfileById(req, res)
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await updateProfile(req, res)
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await deleteProfile(req, res)
  })

export default handler
