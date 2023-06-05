import { IProfile } from './profile'

export interface IUser {
  _id?: string
  userName: string
  email: string
  password: string
}

export interface IUserOutput {
  success: boolean
  data?: IUser & { profile: IProfile }
}

export type GetCurrentUserApiInput = { id: string }
