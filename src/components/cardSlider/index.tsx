import React, { useEffect, useMemo } from 'react'
import Link from 'next/link'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Header, More, Title } from './CardSlider.style'
import { Items, ItemsArray } from './Item'
import { Details } from './Details'
import { SliderButtonsPosition, Slider, Icon } from '@/ui-components'
import { useStore } from '@/store'

type Props = {
  items: ItemsArray[]
  title: string
  link: string
  style?: object
  id: string
}

export function CardSliderComp(props: Props): React.JSX.Element {
  const { items, title, link, style, id } = props

  const itemsArray = useMemo(
    () =>
      items.map((item) => (
        <Items key={`${id}_${item.key}`} item={item} id={id} />
      )),
    [items],
  )

  const setSelectedCartSliderItem = useStore(
    (store) => store.setSelectedCartSliderItem,
  )

  const selectedCartSliderSection = useStore(
    (store) => store.selectedCartSliderSection,
  )

  const selected_id = selectedCartSliderSection?.split('_')[0]

  useEffect(() => {
    setSelectedCartSliderItem?.({} as ItemsArray, '')
  }, [])

  return (
    <Container id={id} style={style}>
      <Header>
        <Title>{title}</Title>
        {link && (
          <More>
            <Link href={link}>بیشتر</Link>
            <Icon icon={faChevronLeft} />
          </More>
        )}
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
      {selected_id === id && <Details />}
    </Container>
  )
}
