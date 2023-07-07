import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { faArrowLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Back, Header, Main } from './WatchHeader.style'
import {
  UI_Col,
  UI_Icon,
  UI_Row,
  Typography,
  UI_InputCheckbox,
} from '@/ui-components'
import { globalMessages } from '@/assets/globalMessages'

const UI_Modal = dynamic(
  async () => (await import('@/ui-components/modal')).UI_Modal,
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
          <UI_Icon
            icon={faGear}
            spin
            onClick={() => setOpenSettings((x) => !x)}
          />
          <Typography onClick={handleClickHome}>
            {formatMessage(globalMessages.mainPage)}
          </Typography>
        </Main>
        <div>
          {formatMessage(globalMessages.movieTitle)}: بازمانده های تاریخ
        </div>
        <Back onClick={back}>
          <span>{formatMessage(globalMessages.back)}</span>
          <UI_Icon icon={faArrowLeft} />
        </Back>
      </Header>
      <UI_Modal
        open={openSettings}
        title={formatMessage(globalMessages.defaultSetting)}
        onClose={() => setOpenSettings((x) => !x)}
        xs
        onSuccess={() => setOpenSettings((x) => !x)}
        onCancel={() => setOpenSettings((x) => !x)}
      >
        <>
          <UI_Row display='flex'>
            <UI_Col xs={1}>
              <UI_InputCheckbox type='checkbox' />
            </UI_Col>
            <UI_Col xs={11}>
              {formatMessage(globalMessages.displayControlPanel)}
            </UI_Col>
          </UI_Row>
          <UI_Row display='flex'>
            <UI_Col xs={1}>
              <UI_InputCheckbox type='checkbox' />
            </UI_Col>
            <UI_Col xs={11}>{formatMessage(globalMessages.autoPlay)}</UI_Col>
          </UI_Row>
          <UI_Row display='flex'>
            <UI_Col xs={1}>
              <UI_InputCheckbox type='checkbox' />
            </UI_Col>
            <UI_Col xs={11}>
              {formatMessage(globalMessages.displayTopBar)}
            </UI_Col>
          </UI_Row>
          <UI_Row display='flex'>
            <UI_Col xs={1}>
              <UI_InputCheckbox type='checkbox' />
            </UI_Col>
            <UI_Col xs={11}>{formatMessage(globalMessages.playMuted)}</UI_Col>
          </UI_Row>
        </>
      </UI_Modal>
    </>
  )
}
