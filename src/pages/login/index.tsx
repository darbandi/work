import dynamic from 'next/dynamic'
import { SEOGenerator } from '@/components'

const MainNoSSR = dynamic(
  async () => (await import('@/containers/auth/login')).LoginPage,
  {
    ssr: false,
  },
)

export default function Login(): JSX.Element {
  return (
    <>
      <SEOGenerator title='loginRegister' />
      <MainNoSSR />
    </>
  )
}

Login.header = 'empty'
Login.footer = 'empty'
