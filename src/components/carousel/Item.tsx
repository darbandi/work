import { WatchDetailsButtons_comp } from '../watchDetailsButtons/WatchDetailsButtons'
import {
  EnTitleStyle,
  ImageWrapper,
  InfoSection,
  InfoWrapper,
  ItemWrapper,
  TitleStyle,
} from '@/components/carousel/Item.style'
import { UI_ImageLoading } from '@/ui-components'

export type ItemsArray = {
  id: string
  key: string
  title: string
  subtitle: string
}

type ItemProps = { item: ItemsArray; isDisabledDetailsButton?: boolean }

export function Items_comp(props: ItemProps): JSX.Element {
  const { item, isDisabledDetailsButton } = props

  return (
    <ItemWrapper>
      <InfoWrapper>
        <InfoSection>
          <TitleStyle href={`/watch/${item.id}`}>{item.title}</TitleStyle>
          <EnTitleStyle>{item.subtitle}</EnTitleStyle>
        </InfoSection>
        <WatchDetailsButtons_comp
          id={item.id}
          isDisabledDetailsButton={isDisabledDetailsButton}
        />
      </InfoWrapper>
      <ImageWrapper>
        {item && (
          <UI_ImageLoading
            className='img'
            src={`/images/sliders/${item.id}.webp`}
            width={1920}
            height={650}
          />
        )}
      </ImageWrapper>
    </ItemWrapper>
  )
}
