import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import { ContainedButton, OutlinedButton } from '../button'
import { Icon } from '../icon'
import { Typography } from '../typography'
import { Actions, Blur, Container, Header } from './Modal.style'
import { colors } from '@/theme'

type ModalHeaderProps = { children: React.JSX.Element }

export function ModalHeader(props: ModalHeaderProps): React.JSX.Element {
  const { children } = props
  return <Header>{children}</Header>
}

export function ModalAction(props: ModalHeaderProps): React.JSX.Element {
  const { children } = props
  return <Actions>{children}</Actions>
}

type ModalProps = {
  open: boolean
  title: string
  children: React.JSX.Element
  onClose: () => void
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  onSuccess?: () => void
  onCancel?: () => void
}

export function Modal(props: ModalProps): React.JSX.Element | null {
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
  useEffect(() => {
    if (open) document.getElementsByTagName('main')[0].classList.add('blur')
    return () => {
      document.getElementsByTagName('main')[0].classList.remove('blur')
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
