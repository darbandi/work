import React from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import { ssrConfig } from '@/lib'

const MainNoSSR = dynamic(
  async () => (await import('@/containers/main/MainNoSSR')).Main,
  {
    ssr: true,
  },
)

const Index: NextPage = function Index() {
  return <MainNoSSR />
}

export const getServerSideProps = ssrConfig
export default Index
