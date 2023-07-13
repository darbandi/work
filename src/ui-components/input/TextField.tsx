import { RefObject, forwardRef } from 'react'
import {
  TextFieldStyle,
  InputTextStyle,
  TextFieldType,
} from './TextField.style'
import { inputOnChangeType, inputOnKeyDownType } from '@/types/elements'

type Props = TextFieldType & {
  type?: string
  placeholder?: string
  value?: string
  className?: string
  onChange?: (e: inputOnChangeType) => void
  onKeyDown?: (e: inputOnKeyDownType) => void
  startAdornment?: JSX.Element | string | number | null
  endAdornment?: JSX.Element | string | number | null
}

export const UI_TextField = forwardRef(function UI_TextField(
  props: Props,
  ref,
): JSX.Element {
  const {
    endAdornment,
    startAdornment,
    rounded,
    mode,
    className,
    color,
    ...otherProps
  } = props
  return (
    <TextFieldStyle
      className={`${className}`}
      rounded={rounded}
      mode={mode}
      color={color}
    >
      {startAdornment}
      <InputTextStyle
        {...otherProps}
        ref={ref as RefObject<HTMLInputElement> | null | undefined}
      />
      {endAdornment}
    </TextFieldStyle>
  )
})
