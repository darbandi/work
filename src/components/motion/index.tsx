import { useIntersectionObserver } from '@react-hooks-library/core'
import React, { useMemo, useRef } from 'react'
import { Motion, Style, spring } from 'react-motion'

export enum MotionCompEnum {
  carousel = 'carousel',
}

type Props = {
  children: React.JSX.Element
  type: MotionCompEnum
}

export function MotionComp(props: Props): React.JSX.Element {
  const { children, type } = props
  const topTenRef = useRef(null)
  const { inView } = useIntersectionObserver(topTenRef)

  const styles = useMemo(
    () => ({
      carousel: {
        opacity: spring(inView ? 1 : 0),
        marginTop: spring(inView ? 0 : -50),
      },
    }),
    [inView],
  )

  return (
    <Motion style={styles?.[type as keyof typeof MotionCompEnum] as Style}>
      {(interpolatingStyle) => (
        <div ref={topTenRef} style={interpolatingStyle}>
          {children}
        </div>
      )}
    </Motion>
  )
}
