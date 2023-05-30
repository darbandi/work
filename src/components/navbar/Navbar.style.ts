import styled from 'styled-components'

export const Navbar = styled.nav``
export const Ul = styled.ul`
  list-style-type: none;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`
export const Li = styled.li``
export const A = styled.a`
  color: ${({ theme }) => theme.colors.text_main};
  padding: ${({ theme }) => theme.remCalc(16)};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.remCalc(4)};
  font-size: 16px;
  font-weight: bold;
`
