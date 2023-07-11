import { AxiosError } from 'axios'
import { RefetchFunction } from 'axios-hooks'
import mongoose from 'mongoose'
import { IUser } from './user'

export interface IOtp {
  _id?: string
  id?: string
  code: string
  createAt: string
  userId: mongoose.Schema.Types.ObjectId
  mobile: string
}

interface IUseGetOtpInput {
  mobile: string
}

export interface IOtpApiOutput {
  success: boolean
  data?: IUser
  message?: string
}

export interface IUseGetOtpOutput {
  data: IOtpApiOutput
  loading: boolean
  error: AxiosError<IOtpApiOutput, IOtpApiOutput> | null
  execute: RefetchFunction<IUseGetOtpInput, IOtpApiOutput>
  cancelRequest: () => void
}

export interface IUsePostOtpInput {
  mobile: string
  code: string
}

export interface IUsePostOtpOutput {
  data: IOtpApiOutput
  loading: boolean
  error: AxiosError<IOtpApiOutput, IOtpApiOutput> | null
  execute: RefetchFunction<IUsePostOtpInput, IOtpApiOutput>
  cancelRequest: () => void
}
