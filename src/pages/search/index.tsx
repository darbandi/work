import React from 'react'
import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const SearchPage = dynamic(
  async () => (await import('@/containers/search')).SearchPage,
  {
    ssr: false,
  },
)

export default function Search(): JSX.Element {
  return <SearchPage />
}

export const getServerSideProps = ssrConfig
