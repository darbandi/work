import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export function Auth({ children }: { children: ReactElement }): JSX.Element {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/login')
    },
  })

  if (status === 'loading') {
    return <div>Page Loading...</div>
  }

  return children
}
