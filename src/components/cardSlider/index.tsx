import React, { useMemo } from 'react'
import Link from 'next/link'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Header, More, Title } from './CardSlider.style'
import { Items, ItemsArray } from './Item'
import { SliderButtonsPosition, Slider, Icon } from '@/ui-components'

type Props = {
  items: ItemsArray[]
  title: string
  link: string
  style?: object
}

export function CardSliderComp(props: Props): React.JSX.Element {
  const { items, title, link, style } = props

  const itemsArray = useMemo(
    () => items.map((item) => <Items key={item.key} item={item} />),
    [items],
  )

  return (
    <Container style={style}>
      <Header>
        <Title>{title}</Title>
        <More>
          <Link href={link}>بیشتر</Link>
          <Icon icon={faChevronLeft} />
        </More>
      </Header>
      <Slider
        items={itemsArray}
        position={SliderButtonsPosition.side}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          576: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 24,
          },
          1366: {
            slidesPerView: 8,
            spaceBetween: 24,
          },
        }}
      />
    </Container>
  )
}
