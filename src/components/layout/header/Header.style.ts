import styled from 'styled-components'

export const Header = styled.header`
  height: ${({ theme }) => theme.remCalc(57)};
  background: ${({ theme }) => theme.colors.bg_dark_50};
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.remCalc(12)};
`
