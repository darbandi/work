import React from 'react'
import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const MoviePage = dynamic(
  async () => (await import('@/containers/movie')).MoviePage,
  {
    ssr: true,
  },
)

function Watch(): React.JSX.Element {
  return <MoviePage />
}

export const getServerSideProps = ssrConfig

export default Watch
