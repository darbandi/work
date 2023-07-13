import Image from 'next/image'
import { WatchDetailsButtons } from '../watchDetailsButtons'
import {
  EnTitleStyle,
  ImageWrapper,
  InfoSection,
  InfoWrapper,
  ItemWrapper,
  TitleStyle,
} from '@/components/carousel/Item.style'
import { UI_Loading } from '@/ui-components'

export type ItemsArray = {
  id: string
  key: string
  title: string
  subtitle: string
}

type ItemProps = { item: ItemsArray; isDisabledDetailsButton?: boolean }

export function Items(props: ItemProps): JSX.Element {
  const { item, isDisabledDetailsButton } = props

  return (
    <ItemWrapper>
      <InfoWrapper>
        <InfoSection>
          <TitleStyle href={`/watch/${item.id}`}>{item.title}</TitleStyle>
          <EnTitleStyle>{item.subtitle}</EnTitleStyle>
        </InfoSection>
        <WatchDetailsButtons
          id={item.id}
          isDisabledDetailsButton={isDisabledDetailsButton}
        />
      </InfoWrapper>
      <ImageWrapper>
        {item && (
          <Image
            className='img'
            src={`/images/sliders/${item.id}.png`}
            alt='work'
            role='presentation'
            style={{ width: 'auto', height: '100%' }}
            width={1920}
            height={650}
          />
        )}
      </ImageWrapper>
      <UI_Loading className='swiper-lazy-preloader' />
    </ItemWrapper>
  )
}
