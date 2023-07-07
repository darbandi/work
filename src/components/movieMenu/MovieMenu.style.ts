import styled, { css } from 'styled-components'
import { flexCenter, ThemeType } from '@/theme'
import { UI_Link } from '@/ui-components'

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }
`
export const MenuItems = styled.div`
  ${({ theme: { remCalc } }: ThemeType) => css`
    margin: 0 auto;
    ${flexCenter}
    gap: ${remCalc(32)};
    padding: ${remCalc(32)};
    white-space: nowrap;
    width: fit-content;
  `}
`

export const MenuItem = styled(UI_Link)`
  display: inline-block;
  cursor: pointer;
`
