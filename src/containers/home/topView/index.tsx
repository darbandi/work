import React from 'react'
import { Items, itemsArray } from '../topTen'
import { CardSliderComp } from '@/components'

export function TopView(): React.JSX.Element {
  const items = itemsArray.map((item) => <Items key={item.key} item={item} />)
  return (
    <CardSliderComp
      items={items}
      title='برترین‌ها'
      link='/search?type=topView'
    />
  )
}
