import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const WatchHeader = dynamic(
  async () => (await import('@/components/layout/watchHeader')).WatchHeader,
  {
    ssr: false,
  },
)

const WatchPage = dynamic(
  async () => (await import('@/containers/watch')).WatchPage,
  {
    ssr: false,
  },
)

export default function Watch(): JSX.Element {
  return <WatchPage />
}

Watch.header = <WatchHeader />

export const getServerSideProps = ssrConfig
