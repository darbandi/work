import { faAngleLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Container, Form } from './Login.style'
import { useLogic } from './useLogic'
import { globalMessages } from '@/assets/globalMessages'
import { MotionComp } from '@/components'
import {
  UI_Box,
  UI_Button,
  UI_Col,
  UI_Icon,
  UI_InputText,
  UI_Row,
  UI_Text,
  UI_Toast,
} from '@/ui-components'

function LoginForm() {
  const {
    otp,
    getOtpDate,
    phoneNumber,
    isLoading,
    handleSubmit,
    formatMessage,
    setOtp,
    handleKeyDown,
    setPhoneNumber,
    handleBack,
  } = useLogic()

  return (
    <MotionComp>
      <Form onSubmit={handleSubmit}>
        <UI_Text fontWeight='bold' color='gray_200' size={24}>
          {formatMessage(globalMessages.loginWithMobile)}
        </UI_Text>
        {getOtpDate?.success ? (
          <UI_InputText
            type='text'
            mode='light'
            placeholder={formatMessage(globalMessages.oTPNumber)}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <UI_InputText
            type='tel'
            mode='light'
            placeholder={formatMessage(globalMessages.mobileNumberPlaceholder)}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyDown={handleKeyDown}
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
              globalMessages[getOtpDate?.success ? 'sendOTP' : 'getOTP'],
            )}
            {isLoading && <UI_Icon icon={faSpinner} spin />}
          </UI_Button>
          <UI_Button
            style={{ marginRight: 24 }}
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
      <UI_Toast />
    </Container>
  )
}
