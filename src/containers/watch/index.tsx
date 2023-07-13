import { useRouter } from 'next/router'
import { Container } from '@/containers/watch/Watch.style'
import { PlayerComp } from '@/components'

export function WatchPage(): JSX.Element {
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
