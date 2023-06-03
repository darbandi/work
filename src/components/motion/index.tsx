import { useIntersectionObserver } from '@react-hooks-library/core'
import React, { useRef } from 'react'
import { Motion, spring } from 'react-motion'

type Props = {
  children: React.JSX.Element
}

export function MotionComp(props: Props): React.JSX.Element {
  const { children } = props
  const topTenRef = useRef(null)
  const { inView } = useIntersectionObserver(topTenRef)

  return (
    <Motion
      style={{
        opacity: spring(inView ? 1 : 0),
        marginTop: spring(inView ? 0 : -50),
      }}
    >
      {(interpolatingStyle) => (
        <div ref={topTenRef} style={interpolatingStyle}>
          {children}
        </div>
      )}
    </Motion>
  )
}
