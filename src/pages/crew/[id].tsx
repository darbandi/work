import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const CrewPage = dynamic(
  async () => (await import('@/containers/crew/CrewPage')).CrewPage_page,
  {
    ssr: true,
  },
)

export default function Crew(): JSX.Element {
  return <CrewPage />
}

export const getServerSideProps = ssrConfig
