import { IUser } from './user'
import { initializeStore } from '@/store'

export interface StoreInterface {
  count: number
  user?: IUser
  increment: () => void
  getCurrentUser: (id: string) => void
}

export type SetState = (
  partial: Partial<StoreInterface> | StoreInterface,
  replace?: boolean,
) => void

export type GetState = () => StoreInterface
export type StoreType = ReturnType<typeof initializeStore>
