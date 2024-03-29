import { useId, useMemo } from 'react'
import { Items_comp, ItemsArray } from './Item'
import { UI_Slider } from '@/ui-components'

type Props = { items: ItemsArray[]; isDisabledDetailsButton?: boolean }

export function Carousel_comp(props: Props): JSX.Element {
  const { items, isDisabledDetailsButton } = props
  const uId = useId()

  const itemsArray = useMemo(
    () =>
      items?.map((item) => (
        <Items_comp
          key={`${uId}-${item.id}`}
          item={item}
          isDisabledDetailsButton={isDisabledDetailsButton}
        />
      )),
    [items],
  )

  return (
    <UI_Slider
      items={itemsArray}
      loop
      spaceBetween={0}
      slidesPerView={1}
      autoplay
      speed={500}
    />
  )
}
