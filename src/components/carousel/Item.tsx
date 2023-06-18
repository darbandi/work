import Image from 'next/image'
import React from 'react'
import { WatchDetailsButtons } from '../watchDetailsButtons'
import {
  DescriptionStyle,
  ImageWrapper,
  InfoSection,
  InfoWrapper,
  ItemWrapper,
  TitleStyle,
} from '@/components/carousel/Item.style'
import { Loading } from '@/ui-components'

export type ItemsArray = {
  key: number
  title: string
  subtitle: string
}

type ItemProps = { item: ItemsArray }

export function Items({ item }: ItemProps): React.JSX.Element {
  return (
    <ItemWrapper>
      <InfoWrapper>
        <InfoSection>
          <TitleStyle href={`/watch/${item.key}`}>{item.title}</TitleStyle>
          <DescriptionStyle>{item.subtitle}</DescriptionStyle>
        </InfoSection>
        <WatchDetailsButtons id={item.key} />
      </InfoWrapper>
      <ImageWrapper>
        {item && (
          <Image
            className='img'
            src={`/images/sliders/${item.key}.png`}
            alt='work'
            role='presentation'
            style={{ width: 'auto', height: '100%' }}
            width={1920}
            height={650}
          />
        )}
      </ImageWrapper>
      <Loading className='swiper-lazy-preloader' />
    </ItemWrapper>
  )
}
