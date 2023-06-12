import { useRouter } from 'next/router'
import React from 'react'

export function SearchPage(): React.JSX.Element {
  const { query } = useRouter()

  return <div>SearchPage: {query.q}</div>
}
