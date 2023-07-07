import { useIntl } from 'react-intl'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Form } from './Login.style'
import {
  UI_ContainedButton,
  UI_TextButton,
  UI_InputText,
  UI_Box,
  UI_Col,
  UI_Row,
  UI_Icon,
  UI_Text,
} from '@/ui-components'
import { MotionComp } from '@/components'
import { globalMessages } from '@/assets/globalMessages'

export type FormInputs = { phoneNumber: string; otp: string }
export type LoginFormProps = {
  onSubmit: ({ phoneNumber, otp }: FormInputs) => void
}

const LoginForm = (props: LoginFormProps) => {
  const { onSubmit } = props
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const { push } = useRouter()
  const { formatMessage } = useIntl()

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
        <UI_Text fontWeight='bold' color='gray_200' size={24}>
          {formatMessage(globalMessages.loginWithMobile)}
        </UI_Text>
        <UI_InputText
          type='tel'
          mode='light'
          placeholder={formatMessage(globalMessages.mobileNumberPlaceholder)}
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
          <UI_ContainedButton type='submit' variant='primary'>
            {formatMessage(globalMessages.sendOTP)}
          </UI_ContainedButton>
          <UI_TextButton
            variant='secondary'
            style={{ marginRight: 8 }}
            type='button'
            onClick={handleBack}
          >
            {formatMessage(globalMessages.back)}
            <UI_Icon
              icon={faAngleLeft}
              style={{
                marginRight: 8,
              }}
            />
          </UI_TextButton>
        </UI_Box>
        {otp && (
          <UI_InputText
            type='number'
            placeholder={formatMessage(globalMessages.oTPNumber)}
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
      <UI_Row display='flex' alignItems='center' justifyContent='center'>
        <UI_Col md={6} xs={12}>
          <LoginForm onSubmit={handleLogin} />
        </UI_Col>
        <UI_Col md={6} xs={12} hideOn='md'>
          <UI_Box className='img' />
        </UI_Col>
      </UI_Row>
    </Container>
  )
}
