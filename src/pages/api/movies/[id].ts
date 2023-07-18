import { NextApiRequest, NextApiResponse } from 'next'
import { deleteMovie, getMovieById, updateMovie } from '@/controllers'
import { apiConnection, checkAuth } from '@/tools'
import dbConnect from '@/lib/dbConnect'

const handler = apiConnection
  .use(async (req, res, next) => {
    await dbConnect()
    return next()
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await getMovieById(req, res)
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await updateMovie(req, res)
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await deleteMovie(req, res)
  })

export default handler
