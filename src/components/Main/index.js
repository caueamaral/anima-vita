import Card        from '../Card/index.js'
import MainWrapper from './styles.js'

function Main(props) {
  return (
    <MainWrapper>
      <Card setLoading={props.setLoading} layout={props.layout} />
    </MainWrapper>
  )
}

export default Main