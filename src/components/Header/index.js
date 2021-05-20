import HeaderWrapper        from './styles.js'
import { RiLayoutGridFill } from 'react-icons/ri'

function Header(props) {
  function layoutToggle() {

    if (props.layout === 'column') {
      props.setLayout('row')
    }
    else if (props.layout === 'row') {
      props.setLayout('column')
    }
  }

  return (
    <HeaderWrapper>
      <h1>
        <span className="green">Anima</span><span className="blue">Vita</span>
      </h1>
      <h2>
        Online <em>animes</em> and <em>mangas</em> query
      </h2>
      <RiLayoutGridFill onClick={layoutToggle} className="icon" color="#fff" size="30" />
    </HeaderWrapper>
  )
}

export default Header