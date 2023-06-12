import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { PrevButtons, NextButtons } from './Buttons'
import 'swiper/swiper-bundle.css'

export enum SliderButtonsPosition {
  bottomLeft = 'bottomLeft',
  side = 'side',
}

type Props = SwiperProps & {
  items: React.JSX.Element[]
  position?: SliderButtonsPosition
}

export function Slider(props: Props): React.JSX.Element {
  const { items, position, ...otherProps } = props
  return (
    <Swiper modules={[Autoplay]} dir='rtl' {...otherProps}>
      {items?.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
      <PrevButtons position={position} />
      <NextButtons position={position} />
    </Swiper>
  )
}
