import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import { itemsArray } from '../home/topTen'
import { Container, Cover, Position } from './Crew.style'
import { Box, Col, Row, Text } from '@/ui-components'
import { CardSliderComp, Comments, MotionComp } from '@/components'

export function CrewPage(): JSX.Element {
  const { query, push } = useRouter()
  if (!query.id) {
    push('/')
  }

  return (
    <Container>
      <Row display='flex' alignItems='stretch' className='row-crew'>
        <Col sm={6} xs={12} className='information'>
          <Cover />
          <Position>
            <Text size={96} fontWeight='bold'>
              {String(query?.jobPosition).split('_').join(' ')}
            </Text>
          </Position>
          <Box display='flex' flexDirection='column' width='80%'>
            <Image
              src={`/images/profiles/${query.id}.webp`}
              alt='work'
              width={100}
              height={100}
              role='presentation'
              loading='lazy'
              className='thumbnail-image'
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
            <Text
              size={32}
              fontWeight='bold'
              as='h1'
              display='block'
              mt={8}
              mb={8}
            >
              {String(query?.name).split('_').join(' ')}
            </Text>
            <Text
              size={20}
              fontWeight='bold'
              color='gray_600'
              as='div'
              display='block'
              mt={4}
            >
              navid mohammadzadeh
            </Text>
            <Text size={14} as='p' lineHeight={2} mt={24} display='block'>
              نوید محمدزاده متولد 1365 استان تهران است و تا کنون دو سیمرغ بلورین
              بهترین بازیگر مکمل مرد را برای فیلم‌های ابد و یک روز و بدون تاریخ
              بدون امضا دریافت کرده است. در میان جوایز بین‌المللی نیز جایزه
              بهترین بازیگر مرد را از جشنواره فیلم ونیز دریافت کرد.
            </Text>
          </Box>
        </Col>
        <Col sm={6} xs={12}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            overflow='hidden'
            className='image-wrapper'
          >
            <Image
              src={'/images/crew/full/1.jpg'}
              alt='work'
              width={570}
              height={841}
              role='presentation'
              loading='lazy'
              style={{ width: 'auto', height: '80vh' }}
            />
          </Box>
        </Col>
      </Row>
      <Box className='top-slider'>
        <MotionComp>
          <CardSliderComp
            id='top102'
            items={itemsArray}
            title={
              <>
                <Text fontWeight='bold' size={24} color='gray_600'>
                  فیلم‌های{' '}
                </Text>
                <Text
                  fontWeight='bold'
                  size={24}
                  color=''
                  mr={4}
                  display='inline-block'
                >
                  {String(query?.name).split('_').join(' ')}
                </Text>
              </>
            }
            link='/search?type=topView'
            mode='light'
          />
        </MotionComp>
      </Box>
      <Comments crewName={String(query?.name).split('_').join(' ')} />
    </Container>
  )
}
