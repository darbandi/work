import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useIntl } from 'react-intl'
import { Form } from './Login.style'
import { useLogic } from './useLogic'
import {
  UI_Box,
  UI_Button,
  UI_DecreaseTimer,
  UI_Icon,
  UI_TextField,
  UI_Text,
} from '@/ui-components'
import { MotionComp } from '@/components'
import { globalMessages } from '@/assets/globalMessages'
import { inputOnChangeType } from '@/types/elements'

export function LoginForm(): JSX.Element {
  const { formatMessage } = useIntl()
  const {
    otp,
    phoneNumber,
    isLoading,
    isSentOtp,
    setIsSentOtp,
    handleSubmit,
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
        {isSentOtp ? (
          <UI_TextField
            type='text'
            mode='light'
            placeholder={formatMessage(globalMessages.oTPNumber)}
            value={otp}
            onChange={(e: inputOnChangeType) => setOtp(e.target.value)}
            onKeyDown={handleKeyDown}
            endAdornment={
              <UI_Box
                display='flex'
                gap={5}
                width='fit-content'
                alignContent='center'
                justifyContent='center'
              >
                <UI_Text as='div' size={12} display='block' whiteSpace='nowrap'>
                  {formatMessage(globalMessages.reCode)}
                </UI_Text>
                <UI_Text as='div' size={12} display='block'>
                  <UI_DecreaseTimer callback={setIsSentOtp} />
                </UI_Text>
              </UI_Box>
            }
          />
        ) : (
          <UI_TextField
            type='text'
            mode='light'
            placeholder={formatMessage(globalMessages.mobileNumberPlaceholder)}
            value={phoneNumber}
            onChange={(e: inputOnChangeType) => setPhoneNumber(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}
        <UI_Box display='flex'>
          <UI_Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={isLoading}
            loading={isLoading}
          >
            {formatMessage(globalMessages[isSentOtp ? 'sendOTP' : 'getOTP'])}
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
