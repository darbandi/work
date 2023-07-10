import { useAxios } from './tools'
import type { IUseGetOtpOutput, IUsePostOtpOutput } from '@/types/otp'

export const useGetOtp = (): IUseGetOtpOutput => {
  const [{ data, loading, error }, execute, cancelRequest] = useAxios(
    {
      url: 'otp/',
      method: 'GET',
    },
    { manual: true },
  )

  return {
    data,
    loading,
    error,
    execute,
    cancelRequest,
  }
}
export const usePostOtp = (): IUsePostOtpOutput => {
  const [{ data, loading, error }, execute, cancelRequest] = useAxios(
    {
      url: 'otp/',
      method: 'POST',
    },
    { manual: true },
  )

  return {
    data,
    loading,
    error,
    execute,
    cancelRequest,
  }
}
