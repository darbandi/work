import React, { forwardRef } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Link from 'next/link'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { NextButtons, PrevButtons } from './Buttons'
import { Container, Header, More, Title } from './Carousel.style'
import * as theme from '@/theme/Theme.styled'
import { Icon } from '@/ui-components'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 7, itemsFit: 'contain' },
}

type Props = {
  items: React.JSX.Element[]
  title: string
  link: string
  style?: object
}

type Ref =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined

export const CarouselComp = forwardRef(function CarouselComp(
  props: Props,
  ref: Ref,
): React.JSX.Element {
  const { items, title, link, style } = props
  const direction = theme?.dark?.direction === 'rtl' ? 'rtl' : 'ltr'

  return (
    <Container style={style} ref={ref}>
      <Header>
        <Title>{title}</Title>
        <More>
          <Link href={link}>بیشتر</Link>
          <Icon icon={faChevronLeft} />
        </More>
      </Header>
      <AliceCarousel
        mouseTracking
        animationType='fadeout'
        autoPlayDirection={direction}
        autoPlayInterval={3000}
        controlsStrategy='responsive'
        responsive={responsive}
        disableDotsControls
        keyboardNavigation
        renderPrevButton={() => <PrevButtons />}
        renderNextButton={() => <NextButtons />}
        items={items}
      />
    </Container>
  )
})
