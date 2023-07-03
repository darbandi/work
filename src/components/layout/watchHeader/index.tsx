import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { faArrowLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Back, Header, Main } from './WatchHeader.style'
import { Col, Icon, Row, Typography } from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'
import { InputCheckbox } from '@/ui-components/input'

const Modal = dynamic(
  async () => (await import('@/ui-components/modal')).Modal,
  {
    ssr: false, // boolean: true | false
  },
)

export function WatchHeader(): JSX.Element {
  const [openSettings, setOpenSettings] = useState(false)
  const { formatMessage } = useIntl()
  const { back, push } = useRouter()
  const handleClickHome = () => push('/')

  return (
    <>
      <Header>
        <Main>
          <Icon icon={faGear} spin onClick={() => setOpenSettings((x) => !x)} />
          <Typography onClick={handleClickHome}>
            {formatMessage(globalMessages.mainPage)}
          </Typography>
        </Main>
        <div>عنوان فیلم: بازمانده های تاریخ</div>
        <Back onClick={back}>
          <span>{formatMessage(globalMessages.back)}</span>
          <Icon icon={faArrowLeft} />
        </Back>
      </Header>
      <Modal
        open={openSettings}
        title='تنظیمات پیشفرض'
        onClose={() => setOpenSettings((x) => !x)}
        xs
        onSuccess={() => setOpenSettings((x) => !x)}
        onCancel={() => setOpenSettings((x) => !x)}
      >
        <>
          <Row display='flex'>
            <Col xs={1}>
              <InputCheckbox type='checkbox' />
            </Col>
            <Col xs={11}>نمایش نوار کنترل به صورت ثابت</Col>
          </Row>
          <Row display='flex'>
            <Col xs={1}>
              <InputCheckbox type='checkbox' />
            </Col>
            <Col xs={11}>اجرا شدن فیلم به صورت خودکار</Col>
          </Row>
          <Row display='flex'>
            <Col xs={1}>
              <InputCheckbox type='checkbox' />
            </Col>
            <Col xs={11}>نمایش نوار بالای صفحه، به صورت ثابت</Col>
          </Row>
          <Row display='flex'>
            <Col xs={1}>
              <InputCheckbox type='checkbox' />
            </Col>
            <Col xs={11}>فیلم به صورت بی‌صدا اجرا شود</Col>
          </Row>
        </>
      </Modal>
    </>
  )
}
