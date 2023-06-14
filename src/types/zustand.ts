import { IUser } from './user'
import { initializeStore } from '@/store'

export interface IStore {
  count: number
  user?: IUser
  increment: () => void
  setCurrentUser: (user: IUser) => void
}

export type SetState = (
  partial: Partial<IStore> | IStore,
  replace?: boolean,
) => void

export type GetState = () => IStore
export type StoreType = ReturnType<typeof initializeStore>
