import React, { useMemo } from 'react'
import { Items, ItemsArray } from './Item'
import { Slider } from '@/ui-components'

type Props = { items: ItemsArray[] }

export function CarouselComp(props: Props): React.JSX.Element {
  const { items } = props

  const itemsArray = useMemo(
    () => items.map((item) => <Items key={item.key} item={item} />),
    [items],
  )

  return (
    <Slider
      items={itemsArray}
      loop
      spaceBetween={0}
      slidesPerView={1}
      autoplay
      speed={500}
    />
  )
}
