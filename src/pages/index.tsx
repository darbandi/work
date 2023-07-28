import dynamic from 'next/dynamic'
import { SEOGenerator_comp } from '@/components'
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

export default function Index(): JSX.Element {
  return (
    <>
      <SEOGenerator_comp title='mainPage' description='seoDescription' />
      <MainCarousel />
      <TopView />
      <TopTen />
    </>
  )
}

export const getServerSideProps = ssrConfig
