import { IUser } from './user'
import { ItemsArray } from '@/components/cardSlider/Item'
import { initializeStore } from '@/store'

export interface IStoreState {
  count: number
  user?: IUser
  selectedCartSliderItem: ItemsArray | null
  selectedCartSliderSection?: string
}

export interface IStore extends IStoreState {
  increment: () => void
  setCurrentUser: (user: IUser) => void
  setSelectedCartSliderItem: (cardItem?: ItemsArray, key?: string) => void
}

export type SetState = (
  partial: Partial<IStore> | IStore,
  replace?: boolean,
) => void

export type GetState = () => IStore
export type StoreType = ReturnType<typeof initializeStore>
