import { defineMessages } from 'react-intl'

const scope = 'apps.server'

export const serverMessages = defineMessages({
  invalidOtpCode: {
    id: `${scope}.invalidOtpCode`,
    defaultMessage: 'کد وارد شده صحیح نمی‌باشد',
  },
  sendOtpToYourPhone: {
    id: `${scope}.sendOtpToYourPhone`,
    defaultMessage: 'رمز یکبار مصرف، به شماره موبایل شما ارسال شد',
  },
})
