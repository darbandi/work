import { useRouter } from 'next/router'
import { Container } from '@/containers/watch/Watch.style'
import { Player_comp } from '@/components'

export function Watch_page(): JSX.Element {
  const { query, push } = useRouter()

  if (!query.id) {
    push('/')
  }

  return (
    <Container>
      <Player_comp videoId={query.id as string} />
    </Container>
  )
}
