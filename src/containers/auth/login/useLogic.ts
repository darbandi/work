import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { inputTextType } from '@/types/elements'
import { useStore } from '@/store'
import { useGetOtp, usePostOtp } from '@/apis'

export function useLogic() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const { push } = useRouter()
  const { formatMessage } = useIntl()
  const setCurrentUser = useStore((user) => user.setCurrentUser)
  const {
    data: getOtpDate,
    execute: getOtp,
    loading: getOtpLoading,
    error: getOtpError,
  } = useGetOtp()
  const {
    data: postedOtpDate,
    execute: postOtp,
    loading: postOtpLoading,
    error: postOtpError,
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
    if (
      getOtpError?.response?.data.message ||
      postOtpError?.response?.data.message
    ) {
      toast.error(
        getOtpError?.response?.data.message ||
          postOtpError?.response?.data.message ||
          'error!',
      )
    }
  }, [
    getOtpError?.response?.data.message,
    postOtpError?.response?.data.message,
  ])

  useEffect(() => {
    if (getOtpDate?.message) toast.success(getOtpDate.message)
  }, [getOtpDate])

  useEffect(() => {
    if (postedOtpDate?.success) {
      setCurrentUser?.(postedOtpDate.data)
      const credentials = {
        mobile: phoneNumber,
        callbackUrl: '/',
        redirect: true,
      }
      signIn('credentials', credentials)
    }
  }, [postedOtpDate?.success])

  const handleBack = () => {
    push('/', undefined, { shallow: true })
  }

  const handleKeyDown = (e: inputTextType) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'Delete' &&
      e.key !== 'Enter'
    ) {
      e.preventDefault()
    }
  }

  const isLoading = getOtpLoading || postOtpLoading || postedOtpDate?.success

  return {
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
  }
}
