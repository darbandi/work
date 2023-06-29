import styled from 'styled-components'
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
}

export const BaseTextStyle = styled.span<TextType>`
  font-size: ${({ theme, size }: ThemeType) => theme.remCalc(size ?? 14)};
  font-weight: ${({ fontWeight }) => fontWeight ?? '200'};
  color: ${({ theme, color }: ThemeType) =>
    theme.colors[color as keyof typeof commonColors] ?? theme.colors.white};
  line-height: ${({ lineHeight }) => lineHeight ?? 1};
  display: contents;
  font-family: ${({ fontFamily }) => fontFamily ?? 'IRANSansX'};
`
export const Text = styled(BaseTextStyle).attrs<{ component: string }>(
  (props) => ({
    as: props?.component,
  }),
)``
