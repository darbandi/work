import { Container } from './Login.style'
import { LoginForm } from './LoginForm'
import { UI_Box, UI_Col, UI_Row, UI_Toast } from '@/ui-components'

export function LoginPage(): JSX.Element {
  return (
    <Container>
      <UI_Row display='flex' alignItems='center' justifyContent='center'>
        <UI_Col md={6} xs={12}>
          <LoginForm />
        </UI_Col>
        <UI_Col md={6} xs={12} hideOn='md'>
          <UI_Box className='img' />
        </UI_Col>
      </UI_Row>
      <UI_Toast />
    </Container>
  )
}
