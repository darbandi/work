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
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    margin: 0 auto;
    width: 100%;
    padding: ${remCalc(94)};
    background-color: ${colors.darkBlue_900};

    ${responsive(
      'sm',
      css`
        padding: ${`${remCalc(50)} ${remCalc(30)}`};
      `,
    )}
  `}
`

type CommentType = { isReplied: boolean }

export const CommentContainer = styled.div<CommentType>`
  ${({ theme: { colors, remCalc }, isReplied }: ThemeType & CommentType) => css`
    margin-bottom: ${remCalc(24)};

    .row {
      gap: ${remCalc(16)};
      align-items: stretch;

      .image-wrapper {
        overflow: hidden;
        width: ${remCalc(100)};
        height: ${remCalc(100)};
        border-radius: 0 50% 50% 50%;
        ${flexCenter}

        img {
          border-radius: ${remCalc(12)};
          border-top-left-radius: 0;
        }
      }

      .comment {
        max-width: fit-content;
        flex: 1;
        background-color: ${colors.black}60;
        border-radius: ${remCalc(12)};
        border-top-right-radius: 0;
        gap: ${remCalc(8)};
        padding: ${`${remCalc(16)} ${remCalc(24)}`};
        flex-direction: column;
        ${flex}

        .header {
          ${flexSpaceBetween}
        }

        .footer {
          ${flexAlignCenter}
          gap: ${remCalc(16)};

          .like,
          .dislike {
            cursor: pointer;
            gap: ${remCalc(4)};
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
            width: ${remCalc(60)};
            height: ${remCalc(60)};
            border-top-left-radius: 0;

            img {
              border-top-left-radius: 0;
            }
          }
        }
      `,
    )}

    ${isReplied &&
    css`
      padding-right: ${remCalc(116)};
      ${responsive(
        'sm',
        css`
          padding-right: ${remCalc(76)};
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
              border-top-right-radius: ${remCalc(12)};
              border-top-left-radius: 0;
            }
          }
        `,
      )}
    `}
  `}
`

export const Reply = styled.span`
  ${({ theme: { remCalc } }: ThemeType) => css`
    cursor: pointer;
    text-decoration: none;
    ${flexStart}
    gap: ${remCalc(4)};
    margin-inline-start: ${remCalc(18)};
  `}
`
