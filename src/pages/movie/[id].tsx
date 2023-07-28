import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const MoviePage = dynamic(
  async () => (await import('@/containers/movie/MoviePage')).Movie_page,
  {
    ssr: true,
  },
)

export default function Watch(): JSX.Element {
  return <MoviePage />
}

export const getServerSideProps = ssrConfig
