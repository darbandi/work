import React from 'react'
import Image from 'next/image'
import { CardSliderComp, MotionComp } from '@/components'
import { handleDragStart } from '@/tools'
import {
  InfoStyle,
  ItemWrapper,
  TitleStyle,
} from '@/components/cardSlider/Item.style'
import img1 from '@/assets/images/thumbnails/01.png'
import img2 from '@/assets/images/thumbnails/02.png'
import img3 from '@/assets/images/thumbnails/03.png'
import img4 from '@/assets/images/thumbnails/04.png'
import img5 from '@/assets/images/thumbnails/05.png'
import img6 from '@/assets/images/thumbnails/06.png'

export const itemsArray = [
  {
    key: 1,
    title: 'کمدی',
    subtitle: 'Comedy show',
    img: img1,
  },
  {
    key: 2,
    title: 'میندی',
    subtitle: 'Mindy',
    img: img2,
  },
  {
    key: 3,
    title: 'کشور راحت',
    subtitle: 'Country comfort',
    img: img3,
  },
  {
    key: 4,
    title: 'کمدی سیاه',
    subtitle: 'Black Comedy',
    img: img4,
  },
  {
    key: 5,
    title: 'خانه بازی',
    subtitle: 'Playing House',
    img: img5,
  },
  {
    key: 6,
    title: 'میراندا',
    subtitle: 'Miranda',
    img: img6,
  },
  {
    key: 6,
    title: 'کمدی',
    subtitle: 'Comedy show',
    img: img1,
  },
  {
    key: 8,
    title: 'میندی',
    subtitle: 'Mindy',
    img: img2,
  },
  {
    key: 9,
    title: 'کشور راحت',
    subtitle: 'Country comfort',
    img: img3,
  },
  {
    key: 10,
    title: 'کمدی سیاه',
    subtitle: 'Black Comedy',
    img: img4,
  },
  {
    key: 11,
    title: 'خانه بازی',
    subtitle: 'Playing House',
    img: img5,
  },
  {
    key: 12,
    title: 'میراندا',
    subtitle: 'Miranda',
    img: img6,
  },
]

export const Items = ({ item }: { item: (typeof itemsArray)[0] }) => {
  return (
    <ItemWrapper>
      <Image
        src={item.img}
        alt='work'
        onDragStart={handleDragStart}
        role='presentation'
        loading='lazy'
        style={{ width: '100%', height: 'auto' }}
      />
      <div className='swiper-lazy-preloader'></div>
      <InfoStyle>
        <TitleStyle href={`/watch/${item.key}`}>{item.title}</TitleStyle>
      </InfoStyle>
    </ItemWrapper>
  )
}

export function TopTen(): React.JSX.Element {
  const items = itemsArray.map((item) => <Items key={item.key} item={item} />)
  return (
    <>
      <MotionComp>
        <CardSliderComp
          items={items}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={items}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={items}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={items}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={items}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
      <MotionComp>
        <CardSliderComp
          items={items}
          title='10 فیلم برتر'
          link='/search?type=topView'
        />
      </MotionComp>
    </>
  )
}
