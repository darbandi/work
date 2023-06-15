import React from 'react'
import { itemsArray } from '../topTen'
import { CardSliderComp } from '@/components'

export function TopView(): React.JSX.Element {
  return (
    <CardSliderComp
      items={itemsArray}
      title='برترین‌ها'
      link='/search?type=topView'
    />
  )
}
