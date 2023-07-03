import { useIntersectionObserver } from '@react-hooks-library/core'
import React, { useRef } from 'react'
import { Motion } from './Motion.style'

type Props = {
  children: JSX.Element
}

export function MotionComp(props: Props): JSX.Element | null {
  const { children } = props
  const topTenRef = useRef(null)
  const { inView } = useIntersectionObserver(topTenRef)

  return (
    <Motion ref={topTenRef} inView={inView}>
      {children}
    </Motion>
  )
}
