import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const SearchPage = dynamic(
  async () => (await import('@/containers/search/SearchPage')).Search_page,
  {
    ssr: false,
  },
)

export default function Search(): JSX.Element {
  return <SearchPage />
}

export const getServerSideProps = ssrConfig
