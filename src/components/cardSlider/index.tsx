import React, { useEffect, useId, useMemo } from 'react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Header, More, Title } from './CardSlider.style'
import { Items, ItemsArray } from './Item'
import { Details } from './Details'
import {
  UI_SliderButtonsPosition,
  UI_Slider,
  UI_Icon,
  UI_Link,
  UI_Box,
} from '@/ui-components'
import { useStore } from '@/store'

type Props = {
  items: ItemsArray[]
  title: string | JSX.Element
  link: string
  style?: object
  id: string
  mode?: 'dark' | 'light'
}

export function CardSliderComp(props: Props): JSX.Element {
  const { items, title, link, style, id, mode } = props
  const uId = useId()

  const itemsArray = useMemo(
    () =>
      items.map((item) => (
        <UI_Box key={`${uId}-${item.id}`}>
          <Items item={item} id={id} mode={mode} />
        </UI_Box>
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
        <Title mode={mode}>{title}</Title>
        {link && (
          <More mode={mode}>
            <UI_Link href={link}>بیشتر</UI_Link>
            <UI_Icon icon={faChevronLeft} />
          </More>
        )}
      </Header>
      <UI_Slider
        items={itemsArray}
        position={UI_SliderButtonsPosition.side}
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
