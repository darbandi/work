import { useId } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { PrevButtons, NextButtons } from './Buttons.helper'
import 'swiper/swiper-bundle.css'

export enum UI_SliderButtonsPosition {
  bottomLeft = 'bottomLeft',
  side = 'side',
}

type Props = SwiperProps & {
  items: JSX.Element[]
  position?: UI_SliderButtonsPosition
}

export function UI_Slider(props: Props): JSX.Element {
  const uId = useId()
  const { items, position, ...otherProps } = props
  return (
    <Swiper modules={[Autoplay]} dir='rtl' {...otherProps}>
      {items?.map((item, i) => (
        <SwiperSlide key={`${uId}-${i + 1}`}>{item}</SwiperSlide>
      ))}
      {items?.length > 1 && (
        <>
          <PrevButtons position={position} />
          <NextButtons position={position} />
        </>
      )}
    </Swiper>
  )
}
