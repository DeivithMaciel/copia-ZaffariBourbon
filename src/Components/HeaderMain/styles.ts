import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 72px;
  column-gap: 16px;

  img {
    height: 74px;
    width: 208px;
  }

  .link {
    text-decoration: none;
    color: ${colors.gray};
    box-sizing: border-box;
    cursor: pointer;
    white-space: nowrap;
    padding: 8px;
    border-radius: 8px;

    &:hover {
      background-color: ${colors.lightGray};
    }

    .icon {
      color: ${colors.green};
      height: 32px;
      width: 32px;
    }

    span {
      padding-left: 16px;
    }
  }

  .cart {
    padding: 16px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: ${colors.lightGray};
    }
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
    width: 820px;
  }

  button {
    background-color: #e8efec;
    height: 48px;
    width: 48px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
