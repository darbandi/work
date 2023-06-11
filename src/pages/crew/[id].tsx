import React from 'react'
import dynamic from 'next/dynamic'
import { ssrConfig } from '@/lib'

const CrewPage = dynamic(
  async () => (await import('@/containers/crew')).CrewPage,
  {
    ssr: true,
  },
)

function Crew(): React.JSX.Element {
  return <CrewPage />
}

export const getServerSideProps = ssrConfig

export default Crew
