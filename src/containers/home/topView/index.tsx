import React from 'react'
import { items } from '../topTen'
import { CardSliderComp } from '@/components'

export function TopView(): React.JSX.Element {
  return (
    <CardSliderComp
      items={items}
      title='برترین‌ها'
      link='/search?type=topView'
    />
  )
}
