import styled, { css } from 'styled-components'
import { ThemeType, flexCenter, responsive } from '@/theme'

type ContainerType = { displayAllText: boolean }

export const Container = styled.div<ContainerType>`
  ${({
    theme: { colors, remCalc },
    displayAllText,
  }: ThemeType & ContainerType) => css`
    background: ${colors.darkBlue_900};
    color: ${colors.white};
    padding: ${remCalc(94)};

    .description {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      line-clamp: 5;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${responsive(
      '-sm',
      css`
        .description {
          overflow: auto;
          display: block;
          text-overflow: wrap;
        }
      `,
    )}

    ${responsive(
      'sm',
      css`
        padding: ${remCalc(50)};
      `,
    )}

  ${displayAllText &&
    css`
      .description {
        overflow: auto;
        display: block;
        text-overflow: wrap;
      }
    `}
  `}
`
export const More = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    margin-top: ${remCalc(32)};
    ${flexCenter}
    .fa-more {
      width: ${remCalc(30)};
      height: ${remCalc(30)};
      background-color: ${colors.gray_300};
      color: ${colors.gray_700};
      border-radius: 50%;
      padding: ${remCalc(10)};
      cursor: pointer;
      ${flexCenter}
    }

    ${responsive(
      '-sm',
      css`
        display: none;
      `,
    )}
  `}
`
