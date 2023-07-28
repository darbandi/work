import {
  faClock,
  faClose,
  faEye,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { WatchDetailsButtons_comp } from '../watchDetailsButtons/WatchDetailsButtons'
import { Actions, CloseIcon, Container, Title } from './Details.style'
import { ItemsArray } from './Item'
import {
  UI_Box,
  UI_Col,
  UI_Icon,
  UI_ImageLoading,
  UI_Row,
  UI_Text,
} from '@/ui-components'
import { useStore } from '@/store'
import { useDocument } from '@/hooks'
import { globalMessages } from '@/assets/globalMessages'

export function Details_comp(): JSX.Element | null {
  const { hideScroll } = useDocument()
  const { formatMessage } = useIntl()

  const selectedCartSliderItem = useStore(
    (store) => store.selectedCartSliderItem,
  )

  const [imgSrc, setImgSrc] = useState<string>('')

  const setSelectedCartSliderItem = useStore(
    (store) => store.setSelectedCartSliderItem,
  )
  const handleClearSelectedItem = () => {
    setSelectedCartSliderItem?.({} as ItemsArray, '')
    hideScroll(false)
  }

  useEffect(() => {
    setImgSrc('')
    setTimeout(() => {
      setImgSrc(`/images/sliders/${selectedCartSliderItem?.id}.webp?q=100`)
    }, 100)
  }, [selectedCartSliderItem])

  if (!selectedCartSliderItem?.title) return null

  return (
    <Container>
      <UI_ImageLoading
        src={imgSrc}
        width={1920}
        height={650}
        onError={() => setImgSrc('/images/global/no_image.webp')}
        baseClassName='image-loading'
      />
      <UI_Row display='flex' alignItems='stretch' className='base-row'>
        <UI_Col xs={12} sm={7} className='base-col'>
          <UI_Box p={16} position='relative'>
            <Title>
              <CloseIcon onClick={handleClearSelectedItem}>
                <UI_Icon icon={faClose} />
              </CloseIcon>
              {selectedCartSliderItem?.title} 2021
            </Title>
            <UI_Text as='p' mb={16} display='block' lineHeight={2}>
              مجری محبوب یک برنامه تلویزیونی که به عنوان اسطوره اجرای برنامه‌های
              گفتگوی آخر شب شناخته می‌شود، یک نویسنده جدید را استخدام می‌کند تا
              از جایگزین شدن خودش با یک مجری دیگر جلوگیری نماید و...
            </UI_Text>

            <UI_Box display='flex' gap={16} mb={40}>
              <UI_Box display='flex' gap={4} alignItems='center'>
                <UI_Icon icon={faEye} />
                <UI_Text color='gray_400'>10K</UI_Text>
              </UI_Box>
              <UI_Box display='flex' gap={4} alignItems='center'>
                <UI_Icon icon={faThumbsDown} />
                <UI_Text color='gray_400'>300</UI_Text>
              </UI_Box>
              <UI_Box display='flex' gap={4} alignItems='center'>
                <UI_Icon icon={faClock} />
                <UI_Text color='gray_400'>3:30</UI_Text>
              </UI_Box>
            </UI_Box>
            <UI_Row display='flex'>
              <UI_Col width={100}>
                <UI_Text color='blue_300' fontWeight='bold'>
                  {formatMessage(globalMessages.stars)}
                </UI_Text>
              </UI_Col>
              <UI_Col>
                <UI_Text color='gray_500'>
                  ساره بیات، سجاد مطلبی، حمید گودرزی، الناز شاکردوست
                </UI_Text>
              </UI_Col>
            </UI_Row>
            <UI_Row display='flex'>
              <UI_Col width={100}>
                <UI_Text color='blue_300' fontWeight='bold'>
                  {formatMessage(globalMessages.director)}
                </UI_Text>
              </UI_Col>
              <UI_Col>
                <UI_Text color='gray_500'>سجاد مطلبی</UI_Text>
              </UI_Col>
            </UI_Row>
            <UI_Row display='flex'>
              <UI_Col width={100}>
                <UI_Text color='blue_300' fontWeight='bold'>
                  {formatMessage(globalMessages.category)}
                </UI_Text>
              </UI_Col>
              <UI_Col>
                <UI_Text color='gray_500'>
                  کمدی، خانوادگی، موزیکال، فیلم خارجی
                </UI_Text>
              </UI_Col>
            </UI_Row>
            <Actions>
              <WatchDetailsButtons_comp id={selectedCartSliderItem.id} />
            </Actions>
          </UI_Box>
        </UI_Col>
        <UI_Col xs={12} sm={5} hideOn='-sm' className='image-col'>
          <UI_Box width='100%' height='100%'>
            <UI_ImageLoading
              src={imgSrc}
              width={1920}
              height={650}
              onError={() => setImgSrc('/images/global/no_image.webp')}
              className='detail-image'
            />
          </UI_Box>
        </UI_Col>
      </UI_Row>
    </Container>
  )
}
