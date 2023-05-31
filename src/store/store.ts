import { createContext, useContext } from 'react'
import { StoreApi, createStore, useStore as useZustandStore } from 'zustand'
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware'
import { get, set, del } from 'idb-keyval'
import { increment } from './slices'

interface StoreInterface {
  count: number
  increment: () => void
}

export type SetState = (
  partial: Partial<StoreInterface> | StoreInterface,
  replace?: boolean,
) => void

export type GetState = () => StoreInterface

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name)
  },
}

const getDefaultInitialState = () => ({
  count: 10,
})

export type StoreType = ReturnType<typeof initializeStore>

const zustandContext = createContext<StoreType | null>(null)

export const Provider = zustandContext.Provider

export const useStore = <T>(
  selector: (state: StoreInterface) => T,
): T | undefined => {
  const store = useContext(zustandContext)

  if (!store) throw new Error('Store is missing the provider')

  return useZustandStore(store, selector)
}

export const initializeStore = (
  preloadedState: Partial<StoreInterface> = {},
): StoreApi<StoreInterface> => {
  return createStore<StoreInterface, [['zustand/persist', unknown]]>(
    persist(
      (set, get) => ({
        ...getDefaultInitialState(),
        ...preloadedState,
        increment: increment(set, get),
      }),
      {
        name: 'zustand-storage',
        storage: createJSONStorage(() => storage),
        version: 4,
      },
    ),
  )
}
