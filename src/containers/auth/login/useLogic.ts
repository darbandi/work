import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-hot-toast'
import { inputOnKeyDownType } from '@/types/elements'
import { useStore } from '@/store'
import { useGetOtp, usePostOtp } from '@/apis'

type useLogicOutput = {
  otp: string
  phoneNumber: string
  isLoading: boolean
  isSentOtp: boolean
  setIsSentOtp: Dispatch<SetStateAction<boolean>>
  handleSubmit: (event: ChangeEvent<HTMLFormElement>) => Promise<void>
  setOtp: Dispatch<SetStateAction<string>>
  handleKeyDown: (e: inputOnKeyDownType) => void
  setPhoneNumber: Dispatch<SetStateAction<string>>
  handleBack: () => void
}

export function useLogic(): useLogicOutput {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSentOtp, setIsSentOtp] = useState(false)
  const [otp, setOtp] = useState('')
  const { push } = useRouter()
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

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!phoneNumber) return
    if (otp && isSentOtp) {
      postOtp({
        data: {
          mobile: phoneNumber,
          code: otp,
        },
      })
    } else {
      if (!isSentOtp) {
        getOtp({
          params: {
            mobile: phoneNumber,
          },
        })
        setIsSentOtp(true)
      }
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

  const handleKeyDown = (e: inputOnKeyDownType) => {
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
    phoneNumber,
    isLoading,
    isSentOtp,
    setIsSentOtp,
    handleSubmit,
    setOtp,
    handleKeyDown,
    setPhoneNumber,
    handleBack,
  }
}
