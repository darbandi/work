import { createContext, useContext } from 'react'
import { StoreApi, createStore, useStore as useZustandStore } from 'zustand'
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware'
import { get, set, del } from 'idb-keyval'
import { getCurrentUser, increment } from '@/store/utils'
import type { StoreInterface, StoreType } from '@/types/zustand'

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
        getCurrentUser: (id: string) => getCurrentUser(id)(set),
      }),
      {
        name: 'zustand-storage',
        storage: createJSONStorage(() => storage),
        version: 4,
      },
    ),
  )
}
