import { itemsArray } from '../topTen/TopTen.helper'
import { CardSlider_comp } from '@/components'

export function TopView(): JSX.Element {
  return (
    <CardSlider_comp
      id='top10'
      items={itemsArray}
      title='برترین‌ها'
      link='/search?type=topView'
    />
  )
}
