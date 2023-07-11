import { AxiosError } from 'axios'
import { RefetchFunction } from 'axios-hooks'
import { IProfile } from './profile'

export interface IUser {
  _id?: string
  id?: string
  userName?: string
  email?: string
  password?: string
  mobile: string
  isActiveOtp: boolean
}

export interface IUserApiOutput {
  success: boolean
  data?: IUser & { profile: IProfile }
}

export interface IUseGetUserInput {
  id: string
}

export interface IUseGetUserOutput {
  data: IUserApiOutput
  loading: boolean
  error: AxiosError<string, string> | null
  refetch: RefetchFunction<string, string>
}

export interface IUsePostUserOutput {
  data: IUserApiOutput
  loading: boolean
  error: AxiosError<string, IUser> | null
  executePost: RefetchFunction<IUser, Omit<IUserApiOutput, 'password'>>
}

export interface IUseUpdateUserInput {
  id: string
}

export interface IUseUpdateUserOutput {
  data: IUserApiOutput
  loading: boolean
  error: AxiosError<string, IUser> | null
  executeUpdate: RefetchFunction<
    Omit<IUser, 'email'>,
    Omit<IUserApiOutput, 'password'>
  >
}

export interface IUseDeleteUserInput {
  id: string
}

export interface IUseDeleteUserOutput {
  data: IUserApiOutput
  loading: boolean
  error: AxiosError<string, IUser> | null
  executeDelete: RefetchFunction<
    IUseDeleteUserInput,
    Omit<IUserApiOutput, 'data'>
  >
}
