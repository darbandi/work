import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { NextButtons, PrevButtons } from './Buttons'
import {
  DescriptionStyle,
  InfoStyle,
  TitleStyle,
  ItemWrapper,
  Wrapper,
} from './MainCarousel.style'
import img1 from '@/assets/images/16.png'
import img2 from '@/assets/images/17.png'
import img3 from '@/assets/images/19.png'
import * as theme from '@/theme/Theme.styled'
import { handleDragStart } from '@/tools'

const items = [
  <ItemWrapper key={1}>
    <InfoStyle>
      <TitleStyle>مرد عنکبوتی</TitleStyle>
      <DescriptionStyle>Spider Man</DescriptionStyle>
    </InfoStyle>
    <Image
      src={img1}
      alt='work'
      onDragStart={handleDragStart}
      role='presentation'
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
      onDragStart={handleDragStart}
      role='presentation'
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
      onDragStart={handleDragStart}
      role='presentation'
    />
  </ItemWrapper>,
]

export const MainCarousel: NextPage = function MainCarousel() {
  const direction = theme?.dark?.direction === 'rtl' ? 'rtl' : 'ltr'
  return (
    <Wrapper>
      <AliceCarousel
        autoPlay
        infinite
        mouseTracking
        animationType='fadeout'
        autoPlayDirection={direction}
        autoPlayInterval={3000}
        controlsStrategy='responsive'
        disableDotsControls
        keyboardNavigation
        renderPrevButton={() => <PrevButtons />}
        renderNextButton={() => <NextButtons />}
        items={items}
      />
    </Wrapper>
  )
}
