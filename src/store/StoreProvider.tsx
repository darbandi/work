import React, { useRef, type PropsWithChildren } from 'react'
import { Provider, initializeStore } from './store'
import type { StoreType } from '@/types/zustand'

export const StoreProvider = ({
  children,
  ...props
}: PropsWithChildren): JSX.Element => {
  const storeRef = useRef<StoreType>()

  if (!storeRef.current) {
    storeRef.current = initializeStore(props)
  }

  return <Provider value={storeRef.current}>{children}</Provider>
}
