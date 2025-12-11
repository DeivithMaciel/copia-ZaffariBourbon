import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 72px;

  img {
    height: 74px;
    width: 208px;
  }
`

export const Search = styled.div`
  border-radius: 8px;
  background-color: ${colors.lightGray};
  display: flex;

  input {
    height: 48px;
    background-color: transparent !important;
    border-radius: 0;
    border: none;
    color: ${colors.gray};
    font-family: segoeui, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400px;
    padding: 0 0 0 16px;
    line-height: 1.5;
    width: 798px;
  }

  button {
    height: 48px;
    width: 48px;
    border: none;
  }
`
