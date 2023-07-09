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
  UI_InputCheckbox,
  UI_Text,
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
          <UI_Text onClick={handleClickHome} fontWeight='bold'>
            {formatMessage(globalMessages.mainPage)}
          </UI_Text>
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
              <UI_Text>
                {formatMessage(globalMessages.displayControlPanel)}
              </UI_Text>
            </UI_Col>
          </UI_Row>
          <UI_Row display='flex'>
            <UI_Col xs={1}>
              <UI_InputCheckbox type='checkbox' />
            </UI_Col>
            <UI_Col xs={11}>
              <UI_Text>{formatMessage(globalMessages.autoPlay)}</UI_Text>
            </UI_Col>
          </UI_Row>
          <UI_Row display='flex'>
            <UI_Col xs={1}>
              <UI_InputCheckbox type='checkbox' />
            </UI_Col>
            <UI_Col xs={11}>
              <UI_Text>{formatMessage(globalMessages.displayTopBar)}</UI_Text>
            </UI_Col>
          </UI_Row>
          <UI_Row display='flex'>
            <UI_Col xs={1}>
              <UI_InputCheckbox type='checkbox' />
            </UI_Col>
            <UI_Col xs={11}>
              <UI_Text>{formatMessage(globalMessages.playMuted)}</UI_Text>
            </UI_Col>
          </UI_Row>
        </>
      </UI_Modal>
    </>
  )
}
