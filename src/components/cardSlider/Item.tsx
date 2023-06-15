import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import {
  faAngleDoubleDown,
  faClock,
  faEye,
  faPlay,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import {
  Details,
  Footer,
  Hovered,
  InfoStyle,
  ItemWrapper,
  Like,
  LikeView,
  Main,
  Play,
  Time,
  TitleStyle,
  View,
} from '@/components/cardSlider/Item.style'
import { handleDragStart } from '@/tools'
import { Icon } from '@/ui-components'

export type ItemsArray = {
  key: number
  title: string
  subtitle: string
}

type ItemProps = { item: ItemsArray }

export function Items({ item }: ItemProps): React.JSX.Element {
  return (
    <ItemWrapper>
      <Image
        src={`/images/movies/thumbnails/${item.key}.png`}
        alt='work'
        width={570}
        height={841}
        onDragStart={handleDragStart}
        role='presentation'
        loading='lazy'
        style={{ width: '100%', height: 'auto' }}
      />
      <div className='swiper-lazy-preloader'></div>
      <InfoStyle>
        <TitleStyle href={`/watch/${item.key}`}>{item.title}</TitleStyle>
      </InfoStyle>
      <Hovered>
        <Main>
          <Play href={`/watch/${item.key}`}>
            <Icon icon={faPlay} className='fa-play' />
          </Play>
          <Details>
            <Icon icon={faAngleDoubleDown} className='fa-angle-double-down' />
          </Details>
        </Main>
        <Footer className='card-item-footer'>
          <LikeView>
            <Like>
              <Icon icon={faEye} />
              25
            </Like>
            <View>
              <Icon icon={faThumbsUp} />
              500
            </View>
          </LikeView>
          <Time>
            <Icon icon={faClock} />
            {moment().format('HH:mm')}
          </Time>
        </Footer>
      </Hovered>
    </ItemWrapper>
  )
}
