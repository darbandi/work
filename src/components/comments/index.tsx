'use client'

import React, { useId } from 'react'
import { useIntl } from 'react-intl'
import Image from 'next/image'
import {
  faReply,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { Container, CommentContainer, Reply } from './Comments.style'
import { Box, Col, Icon, Row, Typography } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

interface Props {
  id?: string
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

export function Comment(props: comment): React.JSX.Element {
  const { id, create_at, dislikes, likes, name, content, parent_id } = props
  const { formatMessage } = useIntl()

  return (
    <CommentContainer isReplied={Boolean(parent_id)}>
      <Row display='flex' className='row'>
        <Col xs={1} className='image-wrapper'>
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
        </Col>
        <Col xs={11} className='comment'>
          <Box display='flex' className='header'>
            <Typography
              fontSize={18}
              fontWeight={'bold'}
              color='white'
              className='name'
            >
              {name}
            </Typography>
            <Typography
              fontSize={12}
              fontWeight={'bold'}
              color='gray'
              className='time'
            >
              <bdi>{create_at}</bdi>
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={14}
              fontWeight={'100'}
              color='white'
              className='content'
            >
              {content}
            </Typography>
          </Box>
          <Box className='footer'>
            <Typography className='like'>
              <Icon icon={faThumbsUp} className='icon' />
              {likes}
            </Typography>
            <Typography className='dislike'>
              <Icon icon={faThumbsDown} className='icon' />
              {dislikes}
            </Typography>
            <Reply>
              <Icon icon={faReply} />
              {formatMessage(globalMessages.reply)}
            </Reply>
          </Box>
        </Col>
      </Row>
    </CommentContainer>
  )
}

export function Comments(props: Props): React.JSX.Element {
  const { id = 'comments' } = props
  const { formatMessage } = useIntl()
  const uId = useId()

  return (
    <Container id={id}>
      <Typography fontSize={24} fontWeight={'bold'} mb={48} color='white'>
        {formatMessage(globalMessages.comments)}
      </Typography>
      {comments.map((comment) => (
        <Comment key={`${uId}-${comment.id}`} {...comment} />
      ))}
    </Container>
  )
}
