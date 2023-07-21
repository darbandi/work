import styled from 'styled-components'
import React, { CSSProperties, FormEvent, useMemo } from 'react'
import { InView } from 'react-intersection-observer'
import Image from 'next/image'
import { UI_Box } from '../box'
import { spinner } from '@/theme'

export const ImageLoadingStyle = styled(UI_Box)`
  ${spinner}
`

type Props = {
  children?: JSX.Element
  src: string
  width: number
  height: number
  className?: string
  baseClassName?: string
  onError?: () => void
  onClick?: () => void
  onDragStart?: (e: FormEvent<HTMLImageElement> | undefined) => void
  style?: CSSProperties | undefined
}

export const UI_ImageLoading = (props: Props): JSX.Element => {
  const {
    src,
    className,
    baseClassName,
    height,
    width,
    onError,
    onClick,
    onDragStart,
    style,
  } = props

  const Img = useMemo(() => {
    if (!src) return null

    return (
      <Image
        className={className}
        src={src}
        alt='work'
        width={width}
        height={height}
        loading='lazy'
        onError={onError}
        onClick={onClick}
        onDragStart={onDragStart}
        style={style}
      />
    )
  }, [src])

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <ImageLoadingStyle ref={ref} className={baseClassName}>
          {inView && Img}
        </ImageLoadingStyle>
      )}
    </InView>
  )
}
