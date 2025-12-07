import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const HeaderLinks = styled.div`
  background-color: ${colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 24px;
  overflow-x: hidden;
`

export const PagButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
  }

  .online-store {
    background-color: ${colors.white};
    color: ${colors.lightGreen};
    border: 1px solid #dbdbdb;
    padding: 6px 12px;
  }

  .institucional {
    background-color: ${colors.lightGreen};
    color: ${colors.white};
    padding: 6px 12px;

    &:hover {
      background-color: ${colors.white};
      color: ${colors.lightGreen};
    }
  }
`

export const LinksGroup = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 3px;
  gap: 12px;
`

export const LinkItem = styled.li`
  a {
    text-decoration: none;
    color: ${colors.green};
    font-weight: normal;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  p {
    margin: 0;
  }
`
