import { createContext, useContext } from 'react'
import { StoreApi, createStore, useStore as useZustandStore } from 'zustand'

interface StoreInterface {
  count: number
  increment: () => void
  decrement: () => void
}

const getDefaultInitialState = () => ({
  count: 10,
})

export type StoreType = ReturnType<typeof initializeStore>

const zustandContext = createContext<StoreType | null>(null)

export const Provider = zustandContext.Provider

export const useStore = <T>(selector: (state: StoreInterface) => T): any => {
  const store = useContext(zustandContext)

  if (!store) throw new Error('Store is missing the provider')

  return useZustandStore(store, selector)
}

export const initializeStore = (
  preloadedState: Partial<StoreInterface> = {},
): StoreApi<StoreInterface> => {
  return createStore<StoreInterface>((set, get) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    increment: () => {
      set({
        count: get().count + 1,
      })
    },
    decrement: () => {
      set({
        count: get().count - 1,
      })
    },
  }))
}
