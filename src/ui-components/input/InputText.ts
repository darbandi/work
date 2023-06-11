import styled from 'styled-components'

export const InputText = styled.input`
  border: 1px solid #ccc;
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;
  height: 48px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
`
