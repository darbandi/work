import { IStoreState } from '@/types/zustand'

export const getDefaultInitialState = (): IStoreState => ({
  count: 10,
  selectedCartSliderItem: null,
})
