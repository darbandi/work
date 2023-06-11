import { useRouter } from 'next/router'
import React from 'react'

export function MoviePage(): React.JSX.Element {
  const { query, push } = useRouter()

  if (!query.id) {
    push('/')
  }

  return <div>MoviePage</div>
}
