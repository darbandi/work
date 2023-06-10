import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'
import ffmpeg from 'ffmpeg-static'
import { NextApiRequest, NextApiResponse } from 'next'
import { apiConnection } from '@/tools'

const CHUNK_SIZE_IN_BYTES = 1000000

export const config = {
  api: {
    bodyParser: false,
  },
}

function getVideoStream(req: NextApiRequest, res: NextApiResponse) {
  const range = req.headers.range
  if (!range) {
    return res.status(400).send('Rang must be provided')
  }
  const videoId = req.query.videoId
  const videoPath = path.join(process.cwd(), 'public', `${videoId}.mp4`)
  const videoSizeInBytes = fs.statSync(videoPath).size
  const chunkStart = Number(range.replace(/\D/g, ''))
  const chunkEnd = Math.min(
    chunkStart + CHUNK_SIZE_IN_BYTES,
    videoSizeInBytes - 1,
  )
  const contentLength = chunkEnd - chunkStart + 1
  const headers = {
    'Content-Range': `bytes ${chunkStart}-${chunkEnd}/${videoSizeInBytes}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  }
  res.writeHead(206, headers)
  const videoStream = fs.createReadStream(videoPath, {
    start: chunkStart,
    end: chunkEnd,
  })
  videoStream.pipe(res)
}

const handler = apiConnection
  .get((req: NextApiRequest, res: NextApiResponse) => {
    getVideoStream(req, res)
  })
  .post((req: NextApiRequest, res: NextApiResponse) => {
    const time = req.query.time
    const videoId = req.query.videoId
    const videoPath = path.join(process.cwd(), 'public', `${videoId}.mp4`)
    const command = `${ffmpeg} -ss ${time} -i ${videoPath} -vframes 1 -s 150x100 -f image2pipe -`
    const ffmpegProcess = spawn(command, { shell: true })
    let thumbnailData = ''

    ffmpegProcess.stdout.on('data', (chunk) => {
      thumbnailData += chunk.toString('base64')
    })

    ffmpegProcess.on('close', () => {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
      res.writeHead(200, headers)
      res.end(JSON.stringify({ thumbnail: thumbnailData }))
    })
  })

export default handler
