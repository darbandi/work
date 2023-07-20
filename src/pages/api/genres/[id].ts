import { NextApiRequest, NextApiResponse } from 'next'
import { deleteGenre, getGenreById, updateGenre } from '@/controllers'
import { apiConnection, checkAuth } from '@/tools'
import dbConnect from '@/lib/dbConnect'

const handler = apiConnection
  .use(async (req, res, next) => {
    await dbConnect()
    return next()
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await getGenreById(req, res)
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await updateGenre(req, res)
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await deleteGenre(req, res)
  })

export default handler
