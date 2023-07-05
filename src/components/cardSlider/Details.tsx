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
import {
  UI_Col,
  UI_Icon,
  UI_Loading,
  UI_Row,
  Typography,
} from '@/ui-components'
import { useStore } from '@/store'
import { useDocument } from '@/hooks'

export function Details(): JSX.Element | null {
  const [imgLoading, setImgLoading] = useState(false)
  const [imgSrc, setImgSrc] = useState('')
  const { hideScroll } = useDocument()

  const selectedCartSliderItem = useStore(
    (store) => store.selectedCartSliderItem,
  )

  const setSelectedCartSliderItem = useStore(
    (store) => store.setSelectedCartSliderItem,
  )
  const handleClearSelectedItem = () => {
    setSelectedCartSliderItem?.({} as ItemsArray, '')
    hideScroll(false)
  }

  useEffect(() => {
    setImgLoading(true)
    setImgSrc(`/images/sliders/${selectedCartSliderItem?.id}.png`)
    setTimeout(() => {
      setImgLoading(false)
    }, 500)
  }, [selectedCartSliderItem])

  if (!selectedCartSliderItem?.title) return null

  return (
    <>
      <Cover />
      <Container>
        <UI_Row display='flex' alignItems='stretch'>
          <UI_Col xs={12} sm={7}>
            <Title>
              <CloseIcon onClick={handleClearSelectedItem}>
                <UI_Icon icon={faClose} />
              </CloseIcon>
              {selectedCartSliderItem?.title} 2021
            </Title>
            <Description>
              مجری محبوب یک برنامه تلویزیونی که به عنوان اسطوره اجرای برنامه‌های
              گفتگوی آخر شب شناخته می‌شود، یک نویسنده جدید را استخدام می‌کند تا
              از جایگزین شدن خودش با یک مجری دیگر جلوگیری نماید و...
            </Description>
            <UI_Row display='flex' className='view-like-time'>
              <UI_Col xs={1}>
                <UI_Icon icon={faEye} color='gray_100' />
                10K
              </UI_Col>
              <UI_Col xs={1}>
                <UI_Icon icon={faThumbsDown} color='gray_100' />
                300
              </UI_Col>
              <UI_Col xs={1}>
                <UI_Icon icon={faClock} color='gray_100' />
                3:30
              </UI_Col>
            </UI_Row>
            <UI_Row display='flex'>
              <UI_Col width={100}>
                <Typography color='red_700'>ستارگان</Typography>
              </UI_Col>
              <UI_Col>
                <Typography color='gray_600'>
                  ساره بیات، سجاد مطلبی، حمید گودرزی، الناز شاکردوست
                </Typography>
              </UI_Col>
            </UI_Row>
            <UI_Row display='flex'>
              <UI_Col width={100}>
                <Typography color='red_700'>کارگردان</Typography>
              </UI_Col>
              <UI_Col>
                <Typography color='gray_600'>سجاد مطلبی</Typography>
              </UI_Col>
            </UI_Row>
            <UI_Row display='flex'>
              <UI_Col width={100}>
                <Typography color='red_700'>دسته‌بندی</Typography>
              </UI_Col>
              <UI_Col>
                <Typography color='gray_600'>
                  کمدی، خانوادگی، موزیکال، فیلم خارجی
                </Typography>
              </UI_Col>
            </UI_Row>
            <Actions>
              <WatchDetailsButtons id={selectedCartSliderItem.id} />
            </Actions>
          </UI_Col>
          <UI_Col xs={12} sm={5}>
            <CustomImage>
              {imgLoading ? (
                <UI_Loading sm />
              ) : (
                imgSrc && (
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
                )
              )}
            </CustomImage>
          </UI_Col>
        </UI_Row>
      </Container>
    </>
  )
}
