import React from 'react'
import { ssrConfig } from '@/lib'

export function Index(): React.JSX.Element {
  return <div>test</div>
}

export const getServerSideProps = ssrConfig
export default Index
