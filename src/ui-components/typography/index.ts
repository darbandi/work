import styled, { css } from 'styled-components'
import {
  space,
  color,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps,
} from 'styled-system'
import { ThemeType } from '@/theme'
import { commonColors } from '@/theme/Theme.styled'

type TypoProps = SpaceProps & ColorProps & TypographyProps

export const Typography = styled.div<TypoProps>`
  ${space}
  ${typography}
  ${color}
`

type TextType = {
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
  `}
`
export const UI_Text = styled(BaseTextStyle).attrs<{ component: string }>(
  (props) => ({
    as: props?.component,
  }),
)``
