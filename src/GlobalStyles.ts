import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  lightGray: '#f0f0f0',
  gray: '#242424',
  green: '#1a5036',
  lightGreen: '#008454'
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.white};
    font-family: Elms Sans, san-serif;
  }
`
