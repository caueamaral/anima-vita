import Card        from '../Card/index.js'
import MainWrapper from './styles.js'

function Main(props) {
  return (
    <MainWrapper>
      <Card setLoading={props.setLoading} />
    </MainWrapper>
  )
}

export default Main