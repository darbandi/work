import {
  faAngleDoubleDown,
  faClock,
  faEye,
  faPlay,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useMediaQuery } from '@react-hooks-library/core'
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
import { useStore } from '@/store'
import { handleDragStart } from '@/tools'
import { Icon, Loading } from '@/ui-components'
import { useDocument } from '@/hooks'

export type ItemsArray = {
  id: string
  key: string
  title: string
  subtitle: string
  duration?: string
}

type ItemProps = { item: ItemsArray; id: string; mode?: 'dark' | 'light' }

export function Items(props: ItemProps): React.JSX.Element {
  const { item, id, mode } = props
  const isMobile = useMediaQuery('(max-width: 576px)')
  const { hideScroll, offsetTop } = useDocument()

  const setSelectedCartSliderItem = useStore(
    (store) => store.setSelectedCartSliderItem,
  )

  const selectedCartSliderSection = useStore(
    (store) => store.selectedCartSliderSection,
  )

  const selectedCartSliderItem = useStore(
    (store) => store.selectedCartSliderItem,
  )

  const handleClickDetails = () => {
    setSelectedCartSliderItem?.(item, id)
    if (isMobile) hideScroll()

    setTimeout(() => {
      const top = offsetTop(id)
      window.scrollTo(0, top as number)
    }, 200)
  }

  useEffect(() => {
    if (selectedCartSliderSection) {
      if (isMobile) hideScroll()
      const top = offsetTop(selectedCartSliderSection)
      window.scrollTo(0, top as number)
    }
  }, [selectedCartSliderSection])

  return (
    <ItemWrapper>
      <Image
        src={`/images/movies/thumbnails/${item.id}.png`}
        alt='work'
        width={570}
        height={841}
        onDragStart={handleDragStart}
        role='presentation'
        loading='lazy'
        style={{ width: '100%', height: 'auto' }}
        onClick={handleClickDetails}
      />
      <Loading className='swiper-lazy-preloader' xs />
      <InfoStyle>
        <TitleStyle href={`/watch/${item.id}`} mode={mode}>
          {item.title}
        </TitleStyle>
      </InfoStyle>
      <Hovered
        isActive={
          selectedCartSliderItem?.id === item?.id &&
          selectedCartSliderSection === id
        }
        onClick={handleClickDetails}
      >
        <Main>
          <Play href={`/watch/${item.id}`} onClick={(e) => e.stopPropagation()}>
            <Icon icon={faPlay} className='fa-play' />
          </Play>
          <Details onClick={handleClickDetails}>
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
            {item?.duration}
          </Time>
        </Footer>
      </Hovered>
    </ItemWrapper>
  )
}
