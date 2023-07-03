import React from 'react'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useSwiper } from 'swiper/react'
import { NextButtonsStyle, PrevButtonsStyle } from './Slider.style'
import { SliderButtonsPosition } from '.'
import { Icon } from '@/ui-components'

type Props = {
  position?: SliderButtonsPosition
}

export function PrevButtons(props: Props): JSX.Element {
  const { position } = props
  const swiper = useSwiper()
  return (
    <PrevButtonsStyle onClick={() => swiper.slidePrev()} position={position}>
      <Icon icon={faChevronRight} />
    </PrevButtonsStyle>
  )
}

export function NextButtons(props: Props): JSX.Element {
  const { position } = props
  const swiper = useSwiper()
  return (
    <NextButtonsStyle onClick={() => swiper.slideNext()} position={position}>
      <Icon icon={faChevronLeft} />
    </NextButtonsStyle>
  )
}
