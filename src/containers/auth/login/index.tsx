import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Form } from './Login.style'
import * as theme from '@/theme/Theme.styled'
import {
  ContainedButton,
  TextButton,
  InputText,
  H4,
  UI_Box,
  Col,
  Row,
  Typography,
  Icon,
} from '@/ui-components'
import { MotionComp } from '@/components'

export type FormInputs = { phoneNumber: string; otp: string }
export type LoginFormProps = {
  onSubmit: ({ phoneNumber, otp }: FormInputs) => void
}

const LoginForm = (props: LoginFormProps) => {
  const { onSubmit } = props
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const { push } = useRouter()

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit({ phoneNumber, otp })
  }

  const handleBack = () => {
    push('/')
  }

  return (
    <MotionComp>
      <Form onSubmit={handleSubmit}>
        <H4>
          <Typography fontWeight='bold' color='gray_700'>
            ورود با تلفن همراه
          </Typography>
        </H4>
        <InputText
          type='tel'
          placeholder='شماره تلفن همراه  ...0912'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onKeyDown={(event) => {
            if (
              !/[0-9]/.test(event.key) &&
              event.key !== 'Backspace' &&
              event.key !== 'Delete'
            ) {
              event.preventDefault()
            }
          }}
        />
        <UI_Box display='flex'>
          <ContainedButton type='submit'>ارسال رمز یکبار مصرف</ContainedButton>
          <TextButton
            style={{ marginRight: 8 }}
            type='button'
            onClick={handleBack}
          >
            بازگشت
            <Icon
              icon={faAngleLeft}
              style={{
                color: theme.dark.colors.gray_700,
                marginRight: 8,
              }}
            />
          </TextButton>
        </UI_Box>
        {otp && (
          <InputText
            type='number'
            placeholder='رمز یکبار مصرف'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        )}
      </Form>
    </MotionComp>
  )
}

export function LoginPage(): JSX.Element {
  const handleLogin = () => {
    // { phoneNumber, otp }: FormInputs
    // console.log('Phone Number:', phoneNumber)
    // console.log('OTP:', otp)
  }

  return (
    <Container>
      <Row display='flex' alignItems='center' justifyContent='center'>
        <Col md={6} xs={12}>
          <LoginForm onSubmit={handleLogin} />
        </Col>
        <Col md={6} xs={12} hideOn='md'>
          <UI_Box className='img' />
        </Col>
      </Row>
    </Container>
  )
}
