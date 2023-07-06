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
  UI_Text,
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
                <UI_Icon icon={faEye} />
                <UI_Text color='gray_400'>10K</UI_Text>
              </UI_Col>
              <UI_Col xs={1}>
                <UI_Icon icon={faThumbsDown} />
                <UI_Text color='gray_400'>300</UI_Text>
              </UI_Col>
              <UI_Col xs={1}>
                <UI_Icon icon={faClock} />
                <UI_Text color='gray_400'>3:30</UI_Text>
              </UI_Col>
            </UI_Row>
            <UI_Row display='flex'>
              <UI_Col width={100}>
                <UI_Text color='blue_300' fontWeight='bold'>
                  ستارگان
                </UI_Text>
              </UI_Col>
              <UI_Col>
                <Typography color='gray_500'>
                  ساره بیات، سجاد مطلبی، حمید گودرزی، الناز شاکردوست
                </Typography>
              </UI_Col>
            </UI_Row>
            <UI_Row display='flex'>
              <UI_Col width={100}>
                <UI_Text color='blue_300' fontWeight='bold'>
                  کارگردان
                </UI_Text>
              </UI_Col>
              <UI_Col>
                <UI_Text color='gray_500' fontWeight='bold'>
                  سجاد مطلبی
                </UI_Text>
              </UI_Col>
            </UI_Row>
            <UI_Row display='flex'>
              <UI_Col width={100}>
                <UI_Text color='blue_300' fontWeight='bold'>
                  دسته‌بندی
                </UI_Text>
              </UI_Col>
              <UI_Col>
                <Typography color='gray_500'>
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
