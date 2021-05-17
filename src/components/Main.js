import Card   from './Card.js'
import styled from 'styled-components'

const MainWrapper = styled.main`
  margin: 60px 0;
  max-width: calc(100% - 80px);
  width: 1600px;
`

function Main() {
  return (
    <MainWrapper>
      <Card />
    </MainWrapper>
  )
}

export default Main