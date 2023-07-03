import React from 'react'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import { Footer } from './Footer.style'
import { Row, Col, Box, Text, UI_Link } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

const menuData = [
  {
    id: '1',
    title: 'صفحه‌اصلی',
    link: '/',
  },
  {
    id: '2',
    title: 'درباره‌ ما',
    link: '/about',
  },
  {
    id: '3',
    title: 'تماس با‌ ما',
    link: '/contact',
  },
  {
    id: '4',
    title: 'تبلیغات',
    link: '/adds',
  },
  {
    id: '5',
    title: 'پرسش‌های متداول',
    link: '/faq',
  },
  {
    id: '6',
    title: 'قوانین و مقررات',
    link: '/rules',
  },
  {
    id: '7',
    title: 'ارسال فیلمنامه',
    link: '/',
  },
]

const socialData = [
  {
    id: '1',
    link: 'http://google.com',
    type: 'instagram',
  },
  {
    id: '2',
    link: 'http://google.com',
    type: 'telegram',
  },
  {
    id: '3',
    link: 'http://google.com',
    type: 'whatsapp',
  },
  {
    id: '4',
    link: 'http://google.com',
    type: 'twitter',
  },
  {
    id: '5',
    link: 'http://google.com',
    type: 'facebook',
  },
]

export function FooterComp(): JSX.Element {
  const { formatMessage } = useIntl()
  return (
    <Footer>
      <Row display='table'>
        <Col md={10} sm={12}>
          <Box
            display='flex'
            alignItems='center'
            gap={32}
            mb={40}
            className='footer-nav'
          >
            {menuData.map((item) => {
              return (
                <UI_Link key={item.id} href={item.link}>
                  <Text size={16} fontWeight='bold' color='gray_600'>
                    {item.title}
                  </Text>
                </UI_Link>
              )
            })}
          </Box>
          <Box
            display='flex'
            gap={32}
            alignItems='center'
            className='copyright'
          >
            <Text size={12} fontWeight='bold' color='gray_700'>
              {formatMessage(globalMessages.copyright)}
            </Text>
            <Box
              display='flex'
              gap={16}
              alignItems='center'
              className='socials'
            >
              {socialData.map((item) => {
                return (
                  <UI_Link
                    key={item.id}
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={`/images/global/${item.type}.png`}
                      alt='work'
                      width={24}
                      height={24}
                      role='presentation'
                      loading='lazy'
                    />
                  </UI_Link>
                )
              })}
            </Box>
          </Box>
        </Col>
        <Col md={2} sm={12}>
          <Box display='flex' alignItems='center' gap={16} className='logos'>
            <Image
              src={'/images/global/samandehi.svg'}
              alt='work'
              width={100}
              height={100}
              role='presentation'
              loading='lazy'
            />
            <Image
              src={'/images/global/enamad.png'}
              alt='work'
              width={100}
              height={100}
              role='presentation'
              loading='lazy'
            />
          </Box>
        </Col>
      </Row>
    </Footer>
  )
}
