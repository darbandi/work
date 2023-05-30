import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  productSlice,
  globalSlice,
  ProductSliceType,
  GlobalSliceType,
} from './slices'

export type AppStoreType = ProductSliceType & GlobalSliceType

export const useAppStore = create<AppStoreType>()(
  persist(
    (...a) => ({
      ...globalSlice(...a),
      ...productSlice(...a),
    }),
    {
      name: 'store',
    },
  ),
)
