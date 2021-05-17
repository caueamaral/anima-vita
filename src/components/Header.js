import styled from 'styled-components'

const Container = styled.header`
  align-items: center;
  font-family: var(--titleFont);
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  text-align: center;

  h1 {
    background: var(--white);
    border-radius: var(--rounded);
    font-size: 38px;
    letter-spacing: 3px;
    padding: 15px 25px;

    .green {
      color: var(--green);
    }

    .blue {
      color: var(--blue);
    }
  }

  h2 {
    background: var(--white);
    border-radius: var(--rounded);
    font-size: 18px;
    letter-spacing: 1px;
    margin-top: 15px;
    padding: 10px 20px;
  }

  em {
    color: var(--gray);
  }
`

function Header() {
  return (
    <Container>
      <h1>
        <span className="green">Anima</span><span className="blue">Vita</span>
      </h1>
      <h2>
        Online query with <em>animes</em> and <em>mangas</em>
      </h2>
    </Container>
  )
}

export default Header