import { useIntersectionObserver } from '@react-hooks-library/core'
import React, { useMemo, useRef } from 'react'
import { Motion, Style, spring } from 'react-motion'

export enum MotionCompEnum {
  carousel = 'carousel',
  openFromRight = 'openFromRight',
}

type Props = {
  children: React.JSX.Element
  type: MotionCompEnum
  active?: boolean
}

export function MotionComp(props: Props): React.JSX.Element | null {
  const { children, type, active } = props
  const topTenRef = useRef(null)
  const { inView } = useIntersectionObserver(topTenRef)

  const styles = useMemo(
    () => ({
      carousel: {
        opacity: spring(inView ? 1 : 0),
        marginTop: spring(inView ? 0 : -50),
      },
      openFromRight: {
        opacity: spring(active ? 1 : 0),
        marginRight: spring(active ? 0 : 50),
        zIndex: active ? 1 : -1,
      },
    }),
    [inView, active],
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
