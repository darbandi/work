import type { SetState } from '@/types/zustand'
import { ItemsArray } from '@/components/cardSlider/Item'

export const setSelectedCartSliderItem =
  (cardItem?: ItemsArray, key?: string) =>
  (set: SetState): void => {
    set({ selectedCartSliderItem: cardItem, selectedCartSliderSection: key })
  }
