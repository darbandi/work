import React from 'react'
import Image from 'next/image'
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import img1 from '@/assets/images/16.png'
import img2 from '@/assets/images/17.png'
import img3 from '@/assets/images/19.png'

import { CarouselComp } from '@/components'
import {
  DescriptionStyle,
  InfoWrapper,
  TitleStyle,
  ItemWrapper,
  ImageWrapper,
  Actions,
  InfoSection,
} from '@/components/carousel/Item.style'
import { ContainedButton, Icon } from '@/ui-components'

const itemsArray = [
  {
    key: 1,
    title: 'مرد عنکبوتی',
    subtitle: 'Spider Man',
    img: img1,
  },
  {
    key: 2,
    title: 'ماتریکس',
    subtitle: 'Matrix',
    img: img2,
  },
  {
    key: 3,
    title: 'مکس دیوانه',
    subtitle: 'Mad Max',
    img: img3,
  },
]

const Items = ({ item }: { item: (typeof itemsArray)[0] }) => {
  const { push } = useRouter()

  const handleClickWatch = () => push(`/watch/${item.key}`)
  const handleClickMovie = () => push(`/movie/${item.key}`)

  return (
    <ItemWrapper key={1}>
      <InfoWrapper>
        <InfoSection>
          <TitleStyle>{item.title}</TitleStyle>
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
        {item.img && (
          <Image
            className='img'
            src={item.img}
            alt='work'
            role='presentation'
            style={{ width: 'auto', height: '100%' }}
          />
        )}
      </ImageWrapper>
      <div className='swiper-lazy-preloader'></div>
    </ItemWrapper>
  )
}

export function MainCarousel(): React.JSX.Element {
  const items = itemsArray.map((item) => <Items key={item.key} item={item} />)
  return <CarouselComp items={items} />
}
