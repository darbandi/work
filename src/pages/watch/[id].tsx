import React from 'react'
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

function Watch(): React.JSX.Element {
  return <WatchPage />
}

Watch.header = <WatchHeader />

export const getServerSideProps = ssrConfig

export default Watch
