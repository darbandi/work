import styled, { css } from 'styled-components'
import Link from 'next/link'
import {
  ThemeType,
  flexCenter,
  flexSpaceBetween,
  flexStart,
  responsive,
} from '@/theme'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }: ThemeType) => theme.remCalc(94)};
  background-color: ${({ theme }: ThemeType) => theme.colors.gray_400};

  ${responsive(
    'sm',
    css`
      padding: ${({ theme }: ThemeType) => theme.remCalc(50)};
    `,
  )}
`
export const Items = styled.div`
  ${flexStart}
  width: 100%;
  gap: ${({ theme }: ThemeType) => theme.remCalc(54)};
  flex-wrap: wrap;
`
export const Item = styled.div`
  flex-basis: calc(25% - ${({ theme }: ThemeType) => theme.remCalc(41)});
  ${responsive(
    'lg',
    css`
      /* flex-basis: calc(25% - ${({ theme }: ThemeType) =>
        theme.remCalc(41)}); */
      flex-basis: calc(33.3% - ${({ theme }: ThemeType) => theme.remCalc(36)});
    `,
  )}
  ${responsive(
    'md',
    css`
      /* flex-basis: calc(33.3% - ${({ theme }: ThemeType) =>
        theme.remCalc(36)}); */
      flex-basis: calc(50% - ${({ theme }: ThemeType) => theme.remCalc(27)});
    `,
  )}

  ${responsive(
    'sm',
    css`
      flex-basis: calc(50% - ${({ theme }: ThemeType) => theme.remCalc(27)});
    `,
  )}
  ${responsive(
    'xs',
    css`
      flex-basis: 100%;
    `,
  )}
`
export const Name = styled.div`
  color: ${({ theme }: ThemeType) => theme.colors.gray_900};
  font-weight: 500;
  font-size: ${({ theme }: ThemeType) => theme.remCalc(20)};
`
export const ImageWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(8)};
  img {
    transition: all 0.3s;
    box-shadow: 0 0 5px ${({ theme }: ThemeType) => theme.colors.gray_700};
    border-radius: ${({ theme }: ThemeType) => theme.remCalc(8)};
  }
  &:hover {
    img {
      box-shadow: 0 0 15px ${({ theme }: ThemeType) => theme.colors.black};
      transform: translateY(-10px);
    }
  }
`
export const Footer = styled.div`
  ${flexSpaceBetween}
`
export const JobPosition = styled.div`
  position: absolute;
  bottom: ${({ theme }: ThemeType) => theme.remCalc(32)};
  right: -10px;
  background-color: ${({ theme }: ThemeType) => theme.colors.red_900};
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(8)};
  border-top-right-radius: 0;
  color: ${({ theme }: ThemeType) => theme.colors.white};
  padding: ${({ theme }: ThemeType) =>
    `${theme.remCalc(4)} ${theme.remCalc(12)}`};
  box-shadow: -1px 0 5px ${({ theme }: ThemeType) => theme.colors.black};
  z-index: 1;

  &::after {
    position: absolute;
    right: -10px;
    top: -7px;
    content: '';
    width: 0;
    height: 0;
    z-index: 1;
    border-top: 7px solid transparent;
    border-right: 10px solid transparent;
    border-left: 10px solid ${({ theme }: ThemeType) => theme.colors.black};
  }
`
export const Button = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background-color: ${({ theme }: ThemeType) => theme.colors.black};
  color: ${({ theme }: ThemeType) => theme.colors.white};
  border-radius: ${({ theme }: ThemeType) => theme.remCalc(8)};
  font-size: ${({ theme }: ThemeType) => theme.remCalc(14)};
  font-weight: 500;
  padding: ${({ theme }: ThemeType) =>
    `${theme.remCalc(4)} ${theme.remCalc(12)}`};
  ${flexCenter}
`
