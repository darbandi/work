import React from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import { ssrConfig } from '@/lib'

const MainCarousel = dynamic(
  async () => (await import('@/containers/main/carousel')).MainCarousel,
  {
    ssr: false,
  },
)
const TopView = dynamic(
  async () => (await import('@/containers/main/topView')).TopView,
  {
    ssr: false,
  },
)
const TopTen = dynamic(
  async () => (await import('@/containers/main/topTen')).TopTen,
  {
    ssr: false,
  },
)

const Index: NextPage = function Index() {
  return (
    <>
      <MainCarousel />
      <TopView />
      <TopTen />
    </>
  )
}

export const getServerSideProps = ssrConfig
export default Index
