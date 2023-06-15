import React from 'react'

import { CarouselComp } from '@/components'

const itemsArray = [
  {
    key: 1,
    title: 'مرد عنکبوتی',
    subtitle: 'Spider Man',
  },
  {
    key: 2,
    title: 'ماتریکس',
    subtitle: 'Matrix',
  },
  {
    key: 3,
    title: 'مکس دیوانه',
    subtitle: 'Mad Max',
  },
]

export function MainCarousel(): React.JSX.Element {
  return <CarouselComp items={itemsArray} />
}
