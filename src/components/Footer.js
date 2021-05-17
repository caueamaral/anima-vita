import styled from 'styled-components'

const Container = styled.footer`
  background: var(--white);
  font-family: var(--titleFont);
  font-size: 18px;
  letter-spacing: 1px;
  padding: 30px 20px;
  text-align: center;
  width: 100%;

  .green {
    color: var(--green);
  }

  .blue {
    color: var(--blue);
  }
`

function Footer() {
  return (
    <Container>
      <strong>
        <span className="green">Anima</span>
        <span className="blue">Vita</span> 2021 - All rights reserved.
      </strong>
    </Container>
  )
}

export default Footer