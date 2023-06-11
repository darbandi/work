import React from 'react'
import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const MainCarousel = dynamic(
  async () => (await import('@/containers/home')).MainCarousel,
  {
    ssr: false,
  },
)
const TopView = dynamic(
  async () => (await import('@/containers/home')).TopView,
  {
    ssr: false,
  },
)
const TopTen = dynamic(async () => (await import('@/containers/home')).TopTen, {
  ssr: false,
})

function Index(): React.JSX.Element {
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
