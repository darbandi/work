import { useRouter } from 'next/router'
import React from 'react'
import { itemsArray } from '../home/topTen'
import { Container } from './Movie.style'
import {
  CardSliderComp,
  CarouselComp,
  Comments,
  Description,
  MotionComp,
  MovieCrew,
  MovieMenu,
  SEOGenerator,
} from '@/components'

const item = {
  id: '1',
  title: 'مرد عنکبوتی',
  subtitle: 'Spider Man',
  key: 'spiderMan',
  great_at: new Date().toLocaleString(),
  duration: '6858',
  description:
    'سریال Silo محصول کشور United States میباشد و در ژانر درام, آخرالزمانی, مهیج در سال 2023 ساخته شده است. در سریال سیلو بازیگرانی چون ، Common، David Oyelowo، Iain Glen، Rebecca Ferguson، Tim Robbins، Will Patton، Rashida Jones، Ferdinand Kingsley، Harriet Walter، Chipo Chung، Caitlin Zoz، Matt Gomez Hidaka، Georgia Goodman، Paul Bigley، Sophie Thompson، Geraldine JamesBilly Postlethwaite و... به ایفای نقش پرداخته اند.   از آن جایی که هوای کره‌ی زمین به شدت مسموم و خطرناک است، ده‌ها هزار انسان برای حفظ جان خود در سیلوهای غول‌پیکری که زیر زمین ساخته شده‌اند، زندگی می‌کنند. این سیلوها دارای قوانین خاصی است که برای محافظت از جان مردم تنظیم شده است. اما آن چه برای همه سوال است این می‌باشد که این سیلوهای مجهز و به درستی تعبیه شده چه زمانی و چرا ساخته شده‌اند؟',
}

export function MoviePage(): JSX.Element {
  const { query, push, asPath } = useRouter()

  if (!query.id) {
    push('/')
  }

  return (
    <Container>
      <SEOGenerator
        description={item.subtitle}
        title={item.title}
        url={process.env.NEXTAUTH_URL + asPath}
        image={`/images/sliders/${item.id}.png`}
      >
        <meta name='DC.Date.Created' content={item.great_at} />
        <meta name='DC.Type' content='video' />
        <meta name='Uid' content={item.id} />
        <meta property='video:duration' content={item.duration} />
      </SEOGenerator>
      <CarouselComp items={[item]} isDisabledDetailsButton />
      <MovieMenu />
      <Description value={item.description} />
      <MovieCrew />
      <Comments />
      <MotionComp>
        <CardSliderComp
          id='similarityMovies'
          items={itemsArray}
          title='فیلم‌های مشابه'
          link='/search?type=topView'
        />
      </MotionComp>
    </Container>
  )
}
