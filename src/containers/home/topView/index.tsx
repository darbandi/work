import React from 'react'
import { items } from '../topTen'
import { CardSliderComp, MotionComp, MotionCompEnum } from '@/components'

export function TopView(): React.JSX.Element {
  return (
    <MotionComp type={MotionCompEnum.fromTop}>
      <CardSliderComp
        items={items}
        title='برترین‌ها'
        link='/search?type=topView'
      />
    </MotionComp>
  )
}
