import Image from 'next/image'
import { useId } from 'react'
import { useIntl } from 'react-intl'
import { Container, Footer, ImageWrapper, Item, Items } from './MovieCrew.style'
import { globalMessages } from '@/assets/globalMessages'
import { UI_Box, UI_Button, UI_Link, UI_Text } from '@/ui-components'

const movieCrew = [
  {
    id: '1',
    name: 'سجاد مطلبی',
    jobPosition: 'کارگردان',
  },
  {
    id: '2',
    name: 'سارا سعادت',
    jobPosition: 'صداپیشه',
  },
  {
    id: '3',
    name: 'حسام سعادت',
    jobPosition: 'نویسنده',
  },
  {
    id: '4',
    name: 'هادی محمدی',
    jobPosition: 'بازیگر',
  },
  {
    id: '5',
    name: 'شهرام کامرانی',
    jobPosition: 'صدابردار',
  },
  {
    id: '6',
    name: 'غلامرضا شریفی نیا',
    jobPosition: 'تدارکات',
  },
  {
    id: '7',
    name: 'شکوه محترم',
    jobPosition: 'فیلمنامه نویس',
  },
]

interface Props {
  id?: string
}

export function MovieCrew(props: Props): JSX.Element {
  const { id = 'crew' } = props
  const uId = useId()
  const { formatMessage } = useIntl()

  return (
    <Container id={id}>
      <UI_Box mb={48}>
        <UI_Text size={24} fontWeight='bold' as='h4' color='gray_100'>
          {formatMessage(globalMessages.movieCrew)}
        </UI_Text>
      </UI_Box>
      <Items>
        {movieCrew.map((crew) => (
          <Item key={`${uId}-${crew.id}`}>
            <ImageWrapper className='image-wrapper'>
              <Image
                className='detail-image'
                src={`/images/profiles/${crew.id}.webp`}
                alt='work'
                width={378}
                height={450}
                role='presentation'
                loading='lazy'
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw'
                style={{ width: '100%', height: 'auto' }}
              />
            </ImageWrapper>
            <Footer>
              <UI_Text
                color='gray_500'
                fontWeight='300'
                size={14}
                as='h4'
                display='block'
              >
                {crew.jobPosition}
              </UI_Text>

              <UI_Text
                color='gray_100'
                fontWeight='bold'
                size={18}
                as='p'
                display='block'
              >
                {crew.name}
              </UI_Text>
              <UI_Box display='flex' justifyContent='end'>
                <UI_Link
                  href={`/crew/${crew.id}/?name=${crew.name.replace(
                    / /g,
                    '_',
                  )}&jobPosition=${crew.jobPosition.replace(/ /g, '_')}`}
                >
                  <UI_Button variant='outlined' color='yellow_700' size='md'>
                    {formatMessage(globalMessages.viewProfile)}
                  </UI_Button>
                </UI_Link>
              </UI_Box>
            </Footer>
          </Item>
        ))}
      </Items>
    </Container>
  )
}
