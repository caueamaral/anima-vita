import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, div, span,
  h1, h2, h3, h4, h5, h6, p,
  a, abbr, acronym, address,
  del, em, img, ins, strong, sub, sup,
  u, i, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, input, select,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, section, summary {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
  }

  html,
  input,
  select {
    font: 14px/1.5em Verdana;
  }

  :root {
    --white:    #fff;
    --green:    #42cca2;
    --blue:     #185b9d;
    --gray:     #999;
    --lightGray:#eee;
    --rounded:  5px;
    --titleFont:'Patrick Hand';
  }

  .app {
    background: linear-gradient(to right, var(--green), var(--blue));
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
`

export default GlobalStyle