import styled, { css } from 'styled-components'
import {
  ThemeType,
  flexColStartCenter,
  flexSpaceBetween,
  responsive,
} from '@/theme'

export const Container = styled.div`
  ${({ theme: { colors } }: ThemeType) => css`
    flex-direction: row;
    ${flexSpaceBetween}
    height: 100vh;
    background-image: url('/login-banner.webp');
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-color: ${colors.gray_200};
  `}
`

export const Form = styled.form`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    ${flexColStartCenter}
    gap: ${remCalc(48)};
    width: 450px;
    margin: 0 auto;
    padding: ${remCalc(36)};
    border-radius: ${remCalc(8)};
    background-color: ${colors.darkBlue_900}f5;
    box-shadow: 0 0 ${`${remCalc(20)} ${colors.black}`};

    ${responsive(
      'sm',
      css`
        width: 70%;
      `,
    )}

    ${responsive(
      'xs',
      css`
        width: 90%;
      `,
    )}
  `}
`
