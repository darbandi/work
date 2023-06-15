import React from 'react'
import { CardSliderComp, MotionComp } from '@/components'

export const itemsArray = [
  {
    key: 1,
    title: 'کمدی',
    subtitle: 'Comedy show',
  },
  {
    key: 2,
    title: 'میندی',
    subtitle: 'Mindy',
  },
  {
    key: 3,
    title: 'کشور راحت',
    subtitle: 'Country comfort',
  },
  {
    key: 4,
    title: 'کمدی سیاه',
    subtitle: 'Black Comedy',
  },
  {
    key: 5,
    title: 'خانه بازی',
    subtitle: 'Playing House',
  },
  {
    key: 6,
    title: 'میراندا',
    subtitle: 'Miranda',
  },
  {
    key: 7,
    title: 'کمدی',
    subtitle: 'Comedy show',
  },
  {
    key: 8,
    title: 'میندی',
    subtitle: 'Mindy',
  },
  {
    key: 9,
    title: 'کشور راحت',
    subtitle: 'Country comfort',
  },
  {
    key: 10,
    title: 'کمدی سیاه',
    subtitle: 'Black Comedy',
  },
  {
    key: 11,
    title: 'خانه بازی',
    subtitle: 'Playing House',
  },
  {
    key: 12,
    title: 'میراندا',
    subtitle: 'Miranda',
  },
]

export function TopTen(): React.JSX.Element {
  return (
    <>
      <MotionComp>
        <CardSliderComp
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
    </>
  )
}
