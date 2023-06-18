import {
  faClock,
  faClose,
  faEye,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { WatchDetailsButtons } from '../watchDetailsButtons'
import {
  Actions,
  CloseIcon,
  Container,
  Cover,
  CustomImage,
  Description,
  Title,
} from './Details.style'
import { ItemsArray } from './Item'
import { Col, Icon, Loading, Row, Typography } from '@/ui-components'
import { useStore } from '@/store'

export function Details(): React.JSX.Element | null {
  const [imgLoading, setImgLoading] = useState(false)
  const [imgSrc, setImgSrc] = useState('')

  const selectedCartSliderItem = useStore(
    (store) => store.selectedCartSliderItem,
  )

  const setSelectedCartSliderItem = useStore(
    (store) => store.setSelectedCartSliderItem,
  )

  const handleClearSelectedItem = () => {
    setSelectedCartSliderItem?.({} as ItemsArray, '')

    document.documentElement.style.overflowY = 'auto'
  }

  useEffect(() => {
    setImgLoading(true)
    setImgSrc(`/images/sliders/${selectedCartSliderItem?.key}.png`)
    setTimeout(() => {
      setImgLoading(false)
    }, 500)
  }, [selectedCartSliderItem])

  if (!selectedCartSliderItem?.title) return null

  return (
    <>
      <Cover />
      <Container>
        <Row display='flex' alignItems='stretch'>
          <Col xs={12} sm={7}>
            <Title>
              <CloseIcon onClick={handleClearSelectedItem}>
                <Icon icon={faClose} />
              </CloseIcon>
              {selectedCartSliderItem?.title} 2021
            </Title>
            <Description>
              مجری محبوب یک برنامه تلویزیونی که به عنوان اسطوره اجرای برنامه‌های
              گفتگوی آخر شب شناخته می‌شود، یک نویسنده جدید را استخدام می‌کند تا
              از جایگزین شدن خودش با یک مجری دیگر جلوگیری نماید و...
            </Description>
            <Row display='flex' className='view-like-time'>
              <Col xs={1}>
                <Icon icon={faEye} color='gray_100' />
                10K
              </Col>
              <Col xs={1}>
                <Icon icon={faThumbsDown} color='gray_100' />
                300
              </Col>
              <Col xs={1}>
                <Icon icon={faClock} color='gray_100' />
                3:30
              </Col>
            </Row>
            <Row display='flex'>
              <Col width={100}>
                <Typography color='red_700'>ستارگان</Typography>
              </Col>
              <Col>
                <Typography color='gray_600'>
                  ساره بیات، سجاد مطلبی، حمید گودرزی، الناز شاکردوست
                </Typography>
              </Col>
            </Row>
            <Row display='flex'>
              <Col width={100}>
                <Typography color='red_700'>کارگردان</Typography>
              </Col>
              <Col>
                <Typography color='gray_600'>سجاد مطلبی</Typography>
              </Col>
            </Row>
            <Row display='flex'>
              <Col width={100}>
                <Typography color='red_700'>دسته‌بندی</Typography>
              </Col>
              <Col>
                <Typography color='gray_600'>
                  کمدی، خانوادگی، موزیکال، فیلم خارجی
                </Typography>
              </Col>
            </Row>
            <Actions>
              <WatchDetailsButtons id={selectedCartSliderItem?.key as number} />
            </Actions>
          </Col>
          <Col xs={12} sm={5}>
            <CustomImage>
              {imgLoading ? (
                <Loading sm />
              ) : (
                <Image
                  className='detail-image'
                  src={imgSrc}
                  onError={() => {
                    setImgSrc('/images/global/no_image.png')
                  }}
                  alt='work'
                  width={570}
                  height={841}
                  role='presentation'
                  loading='lazy'
                  sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw'
                  style={{ width: 'auto', height: '100%' }}
                />
              )}
            </CustomImage>
          </Col>
        </Row>
      </Container>
    </>
  )
}
