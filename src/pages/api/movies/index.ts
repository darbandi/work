import { NextApiRequest, NextApiResponse } from 'next'
import { apiConnection, checkAuth } from '@/tools'
import { createMovie, getAllMovies } from '@/controllers'
import dbConnect from '@/lib/dbConnect'

const handler = apiConnection
  .use(async (req, res, next) => {
    await dbConnect()
    return next()
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await getAllMovies(req, res)
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    await checkAuth(req, res)
    await createMovie(req, res)
  })

export default handler
