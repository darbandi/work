import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useSwiper } from 'swiper/react'
import { NextButtonsStyle, PrevButtonsStyle } from './Slider.style'
import { UI_SliderButtonsPosition } from './UI_Slider'
import { UI_Icon } from '@/ui-components'

type Props = {
  position?: UI_SliderButtonsPosition
}

export function PrevButtons(props: Props): JSX.Element {
  const { position } = props
  const swiper = useSwiper()
  return (
    <PrevButtonsStyle onClick={() => swiper.slidePrev()} position={position}>
      <UI_Icon icon={faChevronRight} />
    </PrevButtonsStyle>
  )
}

export function NextButtons(props: Props): JSX.Element {
  const { position } = props
  const swiper = useSwiper()
  return (
    <NextButtonsStyle onClick={() => swiper.slideNext()} position={position}>
      <UI_Icon icon={faChevronLeft} />
    </NextButtonsStyle>
  )
}
