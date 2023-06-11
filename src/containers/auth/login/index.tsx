import React, { useState } from 'react'
import { Container, Form } from './Login.style'
import {
  PrimaryButton,
  SecondaryButton,
  InputText,
  H4,
  Box,
  Col,
  Row,
} from '@/ui-components'

export type FormInputs = { phoneNumber: string; otp: string }
export type LoginFormProps = {
  onSubmit: ({ phoneNumber, otp }: FormInputs) => void
}

const LoginForm = (props: LoginFormProps) => {
  const { onSubmit } = props
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit({ phoneNumber, otp })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <H4>ورود با تلفن همراه</H4>
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
      <Box>
        <PrimaryButton type='submit'>ارسال رمز یکبار مصرف</PrimaryButton>
        <SecondaryButton style={{ marginRight: 8 }} type='button'>
          ثبت نام
        </SecondaryButton>
      </Box>
      {otp && (
        <InputText
          type='number'
          placeholder='رمز یکبار مصرف'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      )}
    </Form>
  )
}

export function LoginPage(): React.JSX.Element {
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
          <Box className='img' />
        </Col>
      </Row>
    </Container>
  )
}
