import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import { ContainedButton, OutlinedButton } from '../button'
import { Icon } from '../icon'
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
            <Icon icon={faClose} color={colors.gray_700} onClick={onClose} />
          </>
        </ModalHeader>
        {children}
        <ModalAction>
          <>
            {onSuccess && (
              <ContainedButton onClick={onSuccess}>
                تایید
                <Icon icon={faCheck} color={colors.gray_700} />
              </ContainedButton>
            )}
            {onCancel && (
              <OutlinedButton variant='secondary' onClick={onCancel}>
                لغو
                <Icon icon={faClose} color={colors.gray_700} />
              </OutlinedButton>
            )}
          </>
        </ModalAction>
      </Container>
    </>
  )
}
