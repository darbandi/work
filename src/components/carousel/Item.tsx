import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useRouter } from 'next/router'

import React from 'react'
import {
  Actions,
  DescriptionStyle,
  ImageWrapper,
  InfoSection,
  InfoWrapper,
  ItemWrapper,
  TitleStyle,
} from '@/components/carousel/Item.style'
import { ContainedButton, Icon } from '@/ui-components'

export type ItemsArray = {
  key: number
  title: string
  subtitle: string
}

type ItemProps = { item: ItemsArray }

export function Items({ item }: ItemProps): React.JSX.Element {
  const { push } = useRouter()

  const handleClickWatch = () => push(`/watch/${item.key}`)
  const handleClickMovie = () => push(`/movie/${item.key}`)

  return (
    <ItemWrapper>
      <InfoWrapper>
        <InfoSection>
          <TitleStyle href={`/watch/${item.key}`}>{item.title}</TitleStyle>
          <DescriptionStyle>{item.subtitle}</DescriptionStyle>
        </InfoSection>
        <Actions>
          <ContainedButton onClick={handleClickWatch}>
            <Icon icon={faPlay} color='gray_700' />
            تماشا
          </ContainedButton>
          <ContainedButton variant='secondary' onClick={handleClickMovie}>
            <Icon icon={faInfoCircle} color='gray_700' />
            جزئیات
          </ContainedButton>
        </Actions>
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
      <div className='swiper-lazy-preloader'></div>
    </ItemWrapper>
  )
}
