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
  movieDescription: {
    id: `${scope}.movieDescription`,
    defaultMessage: 'توضیحات فیلم',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'توضیحات',
  },
  userComments: {
    id: `${scope}.userComments`,
    defaultMessage: 'دیدگاه کاربران',
  },
  crew: {
    id: `${scope}.crew`,
    defaultMessage: 'عوامل',
  },
  suggestions: {
    id: `${scope}.suggestions`,
    defaultMessage: 'پیشنهادات',
  },
  similarityMovies: {
    id: `${scope}.similarityMovies`,
    defaultMessage: 'فیلم‌های مشابه',
  },
})
