import { useIntl } from 'react-intl'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import { Actions, Blur, Container, Header } from './Modal.style'
import { UI_Icon, UI_Text, UI_Button } from '@/ui-components'
import { colors } from '@/theme'
import { useDocument } from '@/hooks'
import { globalMessages } from '@/assets/globalMessages'

type ModalHeaderProps = { children: JSX.Element }

export function ModalHeader(props: ModalHeaderProps): JSX.Element {
  const { children } = props
  return <Header>{children}</Header>
}

export function ModalAction(props: ModalHeaderProps): JSX.Element {
  const { children } = props
  return <Actions>{children}</Actions>
}

type ModalProps = {
  open: boolean
  title: string
  children: JSX.Element
  onClose: () => void
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  onSuccess?: () => void
  onCancel?: () => void
}

export function UI_Modal(props: ModalProps): JSX.Element | null {
  const {
    open,
    children,
    title,
    onClose,
    xs,
    sm,
    md,
    lg,
    onSuccess,
    onCancel,
  } = props
  const { blurWindow } = useDocument()
  const { formatMessage } = useIntl()

  useEffect(() => {
    if (open) blurWindow()
    return () => {
      blurWindow(false)
    }
  }, [open])
  if (!open) return null
  return (
    <>
      <Blur />
      <Container xs={xs} sm={sm} md={md} lg={lg}>
        <ModalHeader>
          <>
            <UI_Text fontWeight='bold' color='gray_100' size={18}>
              {title}
            </UI_Text>
            <UI_Icon icon={faClose} color={colors.gray_100} onClick={onClose} />
          </>
        </ModalHeader>
        {children}
        <ModalAction>
          <>
            {onSuccess && (
              <UI_Button variant='contained' onClick={onSuccess}>
                {formatMessage(globalMessages.accept)}
                <UI_Icon icon={faCheck} />
              </UI_Button>
            )}
            {onCancel && (
              <UI_Button variant='outlined' color='gray_100' onClick={onCancel}>
                {formatMessage(globalMessages.cancel)}
                <UI_Icon icon={faClose} />
              </UI_Button>
            )}
          </>
        </ModalAction>
      </Container>
    </>
  )
}
