import { defineMessages } from 'react-intl'

const scope = 'apps.global'

export const globalMessages = defineMessages({
  back: {
    id: `${scope}.nack`,
    defaultMessage: 'بازگشت',
  },
  mainPage: {
    id: `${scope}.mainPage`,
    defaultMessage: 'صفحه‌اصلی',
  },
  loginRegister: {
    id: `${scope}.loginRegister`,
    defaultMessage: 'ورود/ثبت‌نام',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'جستجو{other}',
  },
  seoDescription: {
    id: `${scope}.seoDescription`,
    defaultMessage: 'جشنواره فیلم کوتاه',
  },
})
