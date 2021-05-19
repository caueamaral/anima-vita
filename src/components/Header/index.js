import HeaderWrapper from './styles.js'

function Header() {
  return (
    <HeaderWrapper>
      <h1>
        <span className="green">Anima</span><span className="blue">Vita</span>
      </h1>
      <h2>
        Online <em>animes</em> and <em>mangas</em> query
      </h2>
    </HeaderWrapper>
  )
}

export default Header