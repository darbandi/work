import React from 'react'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import { Footer } from './Footer.style'
import { UI_Row, UI_Col, UI_Box, UI_Text, UI_Link } from '@/ui-components'
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
      <UI_Row display='table'>
        <UI_Col md={10} sm={12}>
          <UI_Box
            display='flex'
            alignItems='center'
            gap={32}
            mb={40}
            className='footer-nav'
          >
            {menuData.map((item) => {
              return (
                <UI_Link key={item.id} href={item.link}>
                  <UI_Text size={16} fontWeight='bold' color='gray_200'>
                    {item.title}
                  </UI_Text>
                </UI_Link>
              )
            })}
          </UI_Box>
          <UI_Box
            display='flex'
            gap={32}
            alignItems='center'
            className='copyright'
          >
            <UI_Text size={12} fontWeight='bold' color='gray_400'>
              {formatMessage(globalMessages.copyright)}
            </UI_Text>
            <UI_Box
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
            </UI_Box>
          </UI_Box>
        </UI_Col>
        <UI_Col md={2} sm={12}>
          <UI_Box display='flex' alignItems='center' gap={16} className='logos'>
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
          </UI_Box>
        </UI_Col>
      </UI_Row>
    </Footer>
  )
}
