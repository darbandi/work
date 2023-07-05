import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import { UI_ContainedButton, UI_OutlinedButton } from '../button'
import { UI_Icon } from '../icon'
import { Typography } from '../typography'
import { Actions, Blur, Container, Header } from './Modal.style'
import { colors } from '@/theme'
import { useDocument } from '@/hooks'

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

export function Modal(props: ModalProps): JSX.Element | null {
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
            <Typography>{title}</Typography>
            <UI_Icon icon={faClose} color={colors.gray_700} onClick={onClose} />
          </>
        </ModalHeader>
        {children}
        <ModalAction>
          <>
            {onSuccess && (
              <UI_ContainedButton onClick={onSuccess}>
                تایید
                <UI_Icon icon={faCheck} color={colors.gray_700} />
              </UI_ContainedButton>
            )}
            {onCancel && (
              <UI_OutlinedButton variant='secondary' onClick={onCancel}>
                لغو
                <UI_Icon icon={faClose} color={colors.gray_700} />
              </UI_OutlinedButton>
            )}
          </>
        </ModalAction>
      </Container>
    </>
  )
}
