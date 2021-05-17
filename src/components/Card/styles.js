import styled from 'styled-components'

const CardWrapper = styled.section`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  article {
    background: var(--white);
    border-radius: var(--rounded);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .15);
    padding: 20px;
  }

  img {
    border-radius: var(--rounded);
    width: 100%;
  }

  h3 {
    font-family: var(--title-font);
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
  }
`

export default CardWrapper