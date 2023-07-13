import Image from 'next/image'
import { useId } from 'react'
import { useIntl } from 'react-intl'
import {
  Button,
  Container,
  Footer,
  ImageWrapper,
  Item,
  Items,
  JobPosition,
} from './MovieCrew.style'
import { globalMessages } from '@/assets/globalMessages'
import { UI_Box, UI_Text } from '@/ui-components'

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
        <UI_Text size={24} fontWeight='bold' as='h4' color='gray_800'>
          {formatMessage(globalMessages.movieCrew)}
        </UI_Text>
      </UI_Box>
      <Items>
        {movieCrew.map((crew) => (
          <Item key={`${uId}-${crew.id}`}>
            <ImageWrapper className='image-wrapper'>
              <JobPosition>
                <UI_Text>{crew.jobPosition}</UI_Text>
              </JobPosition>
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
              <UI_Text color='gray_700' fontWeight='bold' size={16}>
                {crew.name}
              </UI_Text>
              <Button
                href={`/crew/${crew.id}/?name=${crew.name.replace(
                  / /g,
                  '_',
                )}&jobPosition=${crew.jobPosition.replace(/ /g, '_')}`}
              >
                <UI_Text size={12} fontWeight='400'>
                  {formatMessage(globalMessages.profile)}
                </UI_Text>
              </Button>
            </Footer>
          </Item>
        ))}
      </Items>
    </Container>
  )
}
