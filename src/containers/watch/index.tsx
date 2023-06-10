import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@/containers/watch/Watch.style'
import { PlayerComp } from '@/components'

export const WatchPage: NextPage = function WatchPage() {
  const { query, push } = useRouter()

  if (!query.id) {
    push('/')
  }

  return (
    <Container>
      <PlayerComp videoId={query.id as string} />
    </Container>
  )
}
