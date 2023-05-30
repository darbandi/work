import { NextApiRequest, NextApiResponse } from 'next'
import { createRouter } from 'next-connect'

const apiMiddleware = {
  onError: (err: unknown, req: NextApiRequest, res: NextApiResponse) => {
    res.status(500).end('Something broke!')
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(404).end('Method is not found')
  },
}
const apiConnection = createRouter<NextApiRequest, NextApiResponse>()
apiConnection.handler(apiMiddleware)

export { apiConnection }
