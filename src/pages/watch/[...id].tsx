import React from 'react'
import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const DetailsHeader = dynamic(
  async () => (await import('@/components/layout/detailsHeader')).DetailsHeader,
  {
    ssr: true,
  },
)

const WatchPage = dynamic(
  async () => (await import('@/containers/watch')).WatchPage,
  {
    ssr: false,
  },
)

const Details = function Details(): React.JSX.Element {
  return <WatchPage />
}

Details.header = <DetailsHeader />

export const getServerSideProps = ssrConfig
export default Details
