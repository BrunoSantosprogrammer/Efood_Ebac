import { createGlobalStyle } from 'styled-components'

export const colors = {
  whitePrimary: ' #FFFFFF',
  whiteBackground: '#F5F5F5',
  colorHeader: '#FFF8F2',
  peachColor: '#FFEBD9',
  redColor: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.colorHeader}
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 120px;
  }
`
