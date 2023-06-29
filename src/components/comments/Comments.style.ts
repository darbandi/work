import styled, { css } from 'styled-components'
import {
  ThemeType,
  flex,
  flexAlignCenter,
  flexCenter,
  flexSpaceBetween,
  flexStart,
  responsive,
} from '@/theme'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }: ThemeType) => theme.remCalc(94)};
  background-color: ${({ theme }: ThemeType) => theme.colors.gray_900};

  ${responsive(
    'sm',
    css`
      padding: ${({ theme }: ThemeType) => theme.remCalc(50)};
    `,
  )}
`
export const CommentContainer = styled.div<{ isReplied: boolean }>`
  margin-bottom: ${({ theme }: ThemeType) => theme.remCalc(24)};

  .row {
    gap: ${({ theme }: ThemeType) => theme.remCalc(16)};
    align-items: stretch;

    .image-wrapper {
      overflow: hidden;
      width: ${({ theme }: ThemeType) => theme.remCalc(100)};
      height: ${({ theme }: ThemeType) => theme.remCalc(100)};
      border-radius: 0 50% 50% 50%;
      ${flexCenter}

      img {
        border-radius: ${({ theme }: ThemeType) => theme.remCalc(12)};
        border-top-left-radius: 0;
      }
    }

    .comment {
      max-width: fit-content;
      flex: 1;
      background-color: ${({ theme }: ThemeType) => theme.colors.black}50;
      border-radius: ${({ theme }: ThemeType) => theme.remCalc(12)};
      border-top-right-radius: 0;
      gap: ${({ theme }: ThemeType) => theme.remCalc(8)};
      padding: ${({ theme }: ThemeType) =>
        `${theme.remCalc(16)} ${theme.remCalc(24)}`};
      flex-direction: column;
      ${flex}

      .header {
        ${flexSpaceBetween}
      }

      .footer {
        ${flexAlignCenter}
        gap: ${({ theme }: ThemeType) => theme.remCalc(16)};

        .like,
        .dislike {
          cursor: pointer;
          gap: ${({ theme }: ThemeType) => theme.remCalc(4)};
          ${flexStart}
        }
      }
    }
  }

  ${responsive(
    'sm',
    css`
      .row {
        .image-wrapper {
          width: ${({ theme }: ThemeType) => theme.remCalc(60)};
          height: ${({ theme }: ThemeType) => theme.remCalc(60)};
          border-top-left-radius: 0;

          img {
            border-top-left-radius: 0;
          }
        }
      }
    `,
  )}

  ${({ isReplied }) =>
    isReplied &&
    css`
      padding-right: ${({ theme }: ThemeType) => theme.remCalc(116)};
      ${responsive(
        'sm',
        css`
          padding-right: ${({ theme }: ThemeType) => theme.remCalc(76)};
          .row {
            flex-direction: row-reverse;

            .image-wrapper {
              border-top-right-radius: 0;
              border-top-left-radius: 50%;

              img {
                border-top-right-radius: 0;
                border-top-left-radius: 50%;
              }
            }

            .comment {
              border-top-right-radius: ${({ theme }: ThemeType) =>
                theme.remCalc(12)};
              border-top-left-radius: 0;
            }
          }
        `,
      )}
    `}
`

export const Reply = styled.span`
  cursor: pointer;
  text-decoration: none;
  ${flexStart}
  gap: ${({ theme }: ThemeType) => theme.remCalc(4)};
  margin-inline-start: ${({ theme }: ThemeType) => theme.remCalc(18)};
`
