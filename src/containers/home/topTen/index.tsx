import React from 'react'
import { CardSliderComp, MotionComp } from '@/components'

export const itemsArray = [
  {
    id: '1',
    key: '',
    title: 'کمدی',
    subtitle: 'Comedy show',
    duration: '10:00',
  },
  {
    id: '2',
    key: '',
    title: 'میندی',
    subtitle: 'Mindy',
    duration: '10:00',
  },
  {
    id: '3',
    key: '',
    title: 'کشور راحت',
    subtitle: 'Country comfort',
    duration: '10:00',
  },
  {
    id: '4',
    key: '',
    title: 'کمدی سیاه',
    subtitle: 'Black Comedy',
    duration: '10:00',
  },
  {
    id: '5',
    key: '',
    title: 'خانه بازی',
    subtitle: 'Playing House',
    duration: '10:00',
  },
  {
    id: '6',
    key: '',
    title: 'میراندا',
    subtitle: 'Miranda',
    duration: '10:00',
  },
  {
    id: '7',
    key: '',
    title: 'کمدی',
    subtitle: 'Comedy show',
    duration: '10:00',
  },
  {
    id: '8',
    key: '',
    title: 'میندی',
    subtitle: 'Mindy',
    duration: '10:00',
  },
  {
    id: '9',
    key: '',
    title: 'کشور راحت',
    subtitle: 'Country comfort',
    duration: '10:00',
  },
  {
    id: '10',
    key: '',
    title: 'کمدی سیاه',
    subtitle: 'Black Comedy',
    duration: '10:00',
  },
  {
    id: '11',
    key: '',
    title: 'خانه بازی',
    subtitle: 'Playing House',
    duration: '10:00',
  },
  {
    id: '12',
    key: '',
    title: 'میراندا',
    subtitle: 'Miranda',
    duration: '10:00',
  },
]

export function TopTen(): JSX.Element {
  return (
    <>
      <MotionComp>
        <CardSliderComp
          id='top11'
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          id='top12'
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          id='top13'
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          id='top14'
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          id='top15'
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          id='top16'
          items={itemsArray}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
    </>
  )
}
