import React from 'react'
import Image from 'next/image'
import img1 from '@/assets/images/16.png'
import img2 from '@/assets/images/17.png'
import img3 from '@/assets/images/19.png'
import { CarouselComp } from '@/components'
import {
  DescriptionStyle,
  InfoStyle,
  TitleStyle,
  ItemWrapper,
} from '@/components/carousel/Item.style'

const items = [
  <ItemWrapper key={1}>
    <InfoStyle>
      <TitleStyle>مرد عنکبوتی</TitleStyle>
      <DescriptionStyle>Spider Man</DescriptionStyle>
    </InfoStyle>
    <Image
      src={img1}
      alt='work'
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
  </ItemWrapper>,
  <ItemWrapper key={2}>
    <InfoStyle>
      <TitleStyle>ماتریکس</TitleStyle>
      <DescriptionStyle>Matrix</DescriptionStyle>
    </InfoStyle>
    <Image
      src={img2}
      alt='work'
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
  </ItemWrapper>,
  <ItemWrapper key={3}>
    <InfoStyle>
      <TitleStyle>مکس دیوانه</TitleStyle>
      <DescriptionStyle>Mad Max</DescriptionStyle>
    </InfoStyle>
    <Image
      src={img3}
      alt='work'
      role='presentation'
      style={{ width: '100%', height: 'auto' }}
    />
  </ItemWrapper>,
]

export function MainCarousel(): React.JSX.Element {
  return <CarouselComp items={items} />
}
