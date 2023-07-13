'use client'

import { useId } from 'react'
import { useIntl } from 'react-intl'
import Image from 'next/image'
import {
  faReply,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { Container, CommentContainer, Reply } from './Comments.style'
import { UI_Col, UI_Icon, UI_Row, UI_Text, UI_Box } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

interface Props {
  id?: string
  crewName?: string
}

type comment = {
  id: string
  name: string
  create_at: string
  content: string
  likes: number
  dislikes: number
  parent_id?: string
}

const comments: Array<comment> = [
  {
    id: '1',
    name: 'امیر آقایی',
    create_at: new Date().toLocaleDateString('fa'),
    content:
      'خیلی هم عالی موندم این کاربر های محترمی ک میگن ماچیزی نفهمیدیم رو کجای دلم بزارم ؟؟؟🤦‍♀️ یکی نیست ب اینا بگه این نوع ژانر معمایی یعنی بایستی آخرش رو حل کنی وقتی آی کیو در حد حل کردن نیست پس با احترام بگم لطفا یا نگاه نکنید و اگرم‌دوست دارید این نوع ژانر فیلم ها نظر میدین چرا 🤔؟؟؟آقا یا خانوم مشکل از شماست ک معما رو نتونستید حل کنید؛ نه نویسنده نه فیلمنامه نویس نه بازیگران. با سپاس از همه .خیلی هم عالی موندم این کاربر های محترمی ک میگن ماچیزی نفهمیدیم رو کجای دلم بزارم ؟؟؟🤦‍♀️ یکی نیست ب اینا بگه این نوع ژانر معمایی یعنی بایستی آخرش رو حل کنی وقتی آی کیو در حد حل کردن نیست پس با احترام بگم لطفا یا نگاه نکنید و اگرم‌دوست دارید این نوع ژانر فیلم ها نظر میدین چرا 🤔؟؟؟آقا یا خانوم مشکل از شماست ک معما رو نتونستید حل کنید؛ نه نویسنده نه فیلمنامه نویس نه بازیگران. با سپاس از همه .خیلی هم عالی موندم این کاربر های محترمی ک میگن ماچیزی نفهمیدیم رو کجای دلم بزارم ؟؟؟🤦‍♀️ یکی نیست ب اینا بگه این نوع ژانر معمایی یعنی بایستی آخرش رو حل کنی وقتی آی کیو در حد حل کردن نیست پس با احترام بگم لطفا یا نگاه نکنید و اگرم‌دوست دارید این نوع ژانر فیلم ها نظر میدین چرا 🤔؟؟؟آقا یا خانوم مشکل از شماست ک معما رو نتونستید حل کنید؛ نه نویسنده نه فیلمنامه نویس نه بازیگران. با سپاس از همه .خیلی هم عالی موندم این کاربر های محترمی ک میگن ماچیزی نفهمیدیم رو کجای دلم بزارم ؟؟؟🤦‍♀️ یکی نیست ب اینا بگه این نوع ژانر معمایی یعنی بایستی آخرش رو حل کنی وقتی آی کیو در حد حل کردن نیست پس با احترام بگم لطفا یا نگاه نکنید و اگرم‌دوست دارید این نوع ژانر فیلم ها نظر میدین چرا 🤔؟؟؟آقا یا خانوم مشکل از شماست ک معما رو نتونستید حل کنید؛ نه نویسنده نه فیلمنامه نویس نه بازیگران. با سپاس از همه .',
    likes: 5,
    dislikes: 12,
    parent_id: undefined,
  },
  {
    id: '2',
    name: 'ادمین',
    create_at: new Date().toLocaleDateString('fa'),
    content: 'سپاس از نظر شما',
    likes: 1,
    dislikes: 2,
    parent_id: '1',
  },
  {
    id: '3',
    name: 'saeeid majidi',
    create_at: new Date().toLocaleDateString('fa'),
    content:
      'خیلی هم عالی موندم این کاربر های محترمی ک میگن ماچیزی نفهمیدیم رو کجای دلم بزارم ؟؟؟🤦‍♀️ .',
    likes: 0,
    dislikes: 0,
    parent_id: undefined,
  },
]

export function Comment(props: comment): JSX.Element {
  const { id, create_at, dislikes, likes, name, content, parent_id } = props
  const { formatMessage } = useIntl()

  return (
    <CommentContainer isReplied={Boolean(parent_id)}>
      <UI_Row display='flex' className='row'>
        <UI_Col xs={1} className='image-wrapper'>
          <Image
            src={`/images/profiles/${id}.webp`}
            alt='work'
            width={100}
            height={100}
            role='presentation'
            loading='lazy'
            sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw'
            style={{ width: 'auto', height: '100%' }}
          />
        </UI_Col>
        <UI_Col xs={11} className='comment'>
          <UI_Box display='flex' className='header'>
            <UI_Text size={18} fontWeight='bold' className='name'>
              {name}
            </UI_Text>
            <UI_Text
              size={12}
              fontWeight='bold'
              color='gray_600'
              className='time'
            >
              <bdi>{create_at}</bdi>
            </UI_Text>
          </UI_Box>
          <UI_Box>
            <UI_Text lineHeight={2} className='content' as='p' color='gray_500'>
              {content}
            </UI_Text>
          </UI_Box>
          <UI_Box className='footer'>
            <UI_Text fontWeight='bold' color='green_500' className='like'>
              <UI_Icon icon={faThumbsUp} className='icon' color='green_500' />
              {likes}
            </UI_Text>
            <UI_Text fontWeight='bold' color='red_500' className='dislike'>
              <UI_Icon icon={faThumbsDown} className='icon' color='red_500' />
              {dislikes}
            </UI_Text>
            <Reply>
              <UI_Icon icon={faReply} />
              <UI_Text size={16} fontWeight='bold' color='gray_400'>
                {formatMessage(globalMessages.reply)}
              </UI_Text>
            </Reply>
          </UI_Box>
        </UI_Col>
      </UI_Row>
    </CommentContainer>
  )
}

export function Comments(props: Props): JSX.Element {
  const { id = 'comments', crewName } = props
  const { formatMessage } = useIntl()
  const uId = useId()

  return (
    <Container id={id}>
      <UI_Box mb={48}>
        <UI_Text
          size={24}
          fontWeight='bold'
          as='h4'
          color={crewName ? 'gray_600' : 'gray_400'}
        >
          {formatMessage(globalMessages.comments)}{' '}
          <UI_Text size={24} fontWeight='bold' mr={4} display='inline-block'>
            {crewName}
          </UI_Text>
        </UI_Text>
      </UI_Box>
      {comments.map((comment) => (
        <Comment key={`${uId}-${comment.id}`} {...comment} />
      ))}
    </Container>
  )
}
