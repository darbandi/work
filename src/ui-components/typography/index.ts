import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'
import { commonColors } from '@/theme/Theme.styled'

export type TextType = {
  as?: string
  size?: number
  fontWeight?: 'bold' | 'light' | '100' | '200' | '300' | '400' | '500'
  color?: string
  lineHeight?: number
  fontFamily?: 'IRANSansX' | 'Droid'
  display?: 'block' | 'contents' | 'inline-block' | 'flex'
  mt?: number
  mb?: number
  ml?: number
  mr?: number
  whiteSpace?:
    | 'nowrap'
    | 'pre-wrap'
    | 'break-spaces'
    | 'normal'
    | 'pre'
    | 'line'
}

export const BaseTextStyle = styled.span<TextType>`
  ${({
    theme: { colors, remCalc },
    fontWeight,
    lineHeight,
    display,
    fontFamily,
    size,
    color,
    mt,
    mb,
    ml,
    mr,
    whiteSpace,
  }: ThemeType & TextType) => css`
    font-size: ${remCalc(size ?? 14)};
    font-weight: ${fontWeight ?? '200'};
    color: ${colors[color as keyof typeof commonColors] ?? colors.white};
    line-height: ${lineHeight ?? 1};
    display: ${display ?? 'contents'};
    font-family: ${fontFamily ?? 'IRANSansX'};
    ${mt && `margin-top: ${remCalc(mt)};`};
    ${mb && `margin-bottom: ${remCalc(mb)};`};
    ${ml && `margin-left: ${remCalc(ml)};`};
    ${mr && `margin-right: ${remCalc(mr)};`};
    ${whiteSpace && `white-space: ${whiteSpace};`};
  `}
`
export const UI_Text = styled(BaseTextStyle).attrs<{
  as: string
}>((props) => ({
  as: props?.as ?? 'span',
}))``
