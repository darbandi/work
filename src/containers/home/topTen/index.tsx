import React from 'react'
import Image from 'next/image'
import { CardSliderComp, MotionComp, MotionCompEnum } from '@/components'
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

const items = [
  <ItemWrapper key={1}>
    <Image
      src={img1}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
    <InfoStyle>
      <TitleStyle>مرد عنکبوتی</TitleStyle>
    </InfoStyle>
  </ItemWrapper>,
  <ItemWrapper key={2}>
    <Image
      src={img2}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
    <InfoStyle>
      <TitleStyle>ماتریکس</TitleStyle>
    </InfoStyle>
  </ItemWrapper>,
  <ItemWrapper key={3}>
    <Image
      src={img3}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
    <InfoStyle>
      <TitleStyle>مکس دیوانه</TitleStyle>
    </InfoStyle>
  </ItemWrapper>,
  <ItemWrapper key={4}>
    <Image
      src={img4}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
    <InfoStyle>
      <TitleStyle>مکس دیوانه</TitleStyle>
    </InfoStyle>
  </ItemWrapper>,
  <ItemWrapper key={5}>
    <Image
      src={img5}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
    <InfoStyle>
      <TitleStyle>مکس دیوانه</TitleStyle>
    </InfoStyle>
  </ItemWrapper>,
  <ItemWrapper key={6}>
    <Image
      src={img6}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
    <InfoStyle>
      <TitleStyle>مکس دیوانه</TitleStyle>
    </InfoStyle>
  </ItemWrapper>,
  <ItemWrapper key={7}>
    <Image
      src={img6}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
    <InfoStyle>
      <TitleStyle>مکس دیوانه</TitleStyle>
    </InfoStyle>
  </ItemWrapper>,
  <ItemWrapper key={8}>
    <Image
      src={img6}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
    <InfoStyle>
      <TitleStyle>مکس دیوانه</TitleStyle>
    </InfoStyle>
  </ItemWrapper>,
  <ItemWrapper key={9}>
    <Image
      src={img6}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
    <InfoStyle>
      <TitleStyle>مکس دیوانه</TitleStyle>
    </InfoStyle>
  </ItemWrapper>,
]

export function TopTen(): React.JSX.Element {
  return (
    <MotionComp type={MotionCompEnum.fromTop}>
      <CardSliderComp
        items={items}
        title='10 فیلم برتر'
        link='/search?type=topView'
      />
    </MotionComp>
  )
}
