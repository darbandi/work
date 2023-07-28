import dynamic from 'next/dynamic'
import { SEOGenerator_comp } from '@/components'

const MainNoSSR = dynamic(
  async () => (await import('@/containers/auth/login/LoginPage')).Login_page,
  {
    ssr: false,
  },
)

export default function Login(): JSX.Element {
  return (
    <>
      <SEOGenerator_comp title='loginRegister' />
      <MainNoSSR />
    </>
  )
}

Login.header = 'empty'
Login.footer = 'empty'
