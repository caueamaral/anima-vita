import styled from 'styled-components'

const CardWrapper = styled.section`
  display: grid;
  grid-gap: 40px;
  transition: opacity .3s;

  &.column {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    h3 {
      margin-top: 10px;
    }
  }

  &.row {
    article {
      display: flex;
    }

    @media (max-width:499px) {
      article {
        flex-direction: column;
      }

      section {
        margin-top: 10px;
      }
    }

    @media (min-width:500px) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

      figure {
        margin-right: 10px;
      }
    }
  }

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }

  &.visible {
    opacity: 1;
    visibility: visible;
  }

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
  }

  p {
    margin-top: 10px;
  }

  small {
    display: block;
    margin-top: 10px;
  }
`

export default CardWrapper