import React from 'react'
import { Slider } from '@/ui-components'

type Props = { items: React.JSX.Element[] }

export function CarouselComp(props: Props): React.JSX.Element {
  const { items } = props
  return (
    <Slider
      items={items}
      loop
      spaceBetween={0}
      slidesPerView={1}
      autoplay
      speed={500}
    />
  )
}
