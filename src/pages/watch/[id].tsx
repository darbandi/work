import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const WatchHeader = dynamic(
  async () =>
    (await import('@/components/layout/watchHeader/WatchHeader'))
      .WatchHeader_comp,
  {
    ssr: false,
  },
)

const WatchPage = dynamic(
  async () => (await import('@/containers/watch/Watch')).Watch_page,
  {
    ssr: false,
  },
)

export default function Watch(): JSX.Element {
  return <WatchPage />
}

Watch.header = <WatchHeader />

export const getServerSideProps = ssrConfig
