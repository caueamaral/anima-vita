import styled from 'styled-components'

const FooterWrapper = styled.footer`
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
    <FooterWrapper>
      <strong>
        <span className="green">Anima</span>
        <span className="blue">Vita</span> 2021 - All rights reserved.
      </strong>
    </FooterWrapper>
  )
}

export default Footer