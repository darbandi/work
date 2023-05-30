import React, { useRef, type PropsWithChildren } from 'react'
import type { StoreType } from './store'
import { Provider, initializeStore } from './store'

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

export default StoreProvider
