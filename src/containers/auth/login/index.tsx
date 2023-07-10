import { useIntl } from 'react-intl'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { faAngleLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { signIn } from 'next-auth/react'
import { Container, Form } from './Login.style'
import {
  UI_Button,
  UI_InputText,
  UI_Box,
  UI_Col,
  UI_Row,
  UI_Icon,
  UI_Text,
} from '@/ui-components'
import { MotionComp } from '@/components'
import { globalMessages } from '@/assets/globalMessages'
import { useGetOtp, usePostOtp } from '@/apis'

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const { push } = useRouter()
  const { formatMessage } = useIntl()
  const { data, execute: getOtp, loading: getOtpLoading } = useGetOtp()
  const {
    data: postedOtpDate,
    execute: postOtp,
    loading: postOtpLoading,
  } = usePostOtp()

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (otp) {
      if (!otp) return
      postOtp({
        data: {
          mobile: phoneNumber,
          code: otp,
        },
      })
    } else {
      if (!phoneNumber) return
      getOtp({
        params: {
          mobile: phoneNumber,
        },
      })
    }
  }

  useEffect(() => {
    if (postedOtpDate?.success) {
      const credentials = { mobile: phoneNumber, callbackUrl: '/' }
      signIn('credentials', credentials)
    }
  }, [postedOtpDate?.success])

  const handleBack = () => {
    push('/')
  }

  const isLoading = getOtpLoading || postOtpLoading || postedOtpDate?.success

  return (
    <MotionComp>
      <Form onSubmit={handleSubmit}>
        <UI_Text fontWeight='bold' color='gray_200' size={24}>
          {formatMessage(globalMessages.loginWithMobile)} {otp}
        </UI_Text>
        {data?.success ? (
          <UI_InputText
            type='text'
            placeholder={formatMessage(globalMessages.oTPNumber)}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
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
        ) : (
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
        )}

        <UI_Box display='flex'>
          <UI_Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={isLoading}
          >
            {formatMessage(
              globalMessages[data?.success ? 'sendOTP' : 'getOTP'],
            )}
            {isLoading && <UI_Icon icon={faSpinner} spin />}
          </UI_Button>
          <UI_Button
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
          </UI_Button>
        </UI_Box>
      </Form>
    </MotionComp>
  )
}

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
    </Container>
  )
}
