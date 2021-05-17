import HeaderWrapper from './styles.js'

function Header() {
  return (
    <HeaderWrapper>
      <h1>
        <span className="green">Anima</span><span className="blue">Vita</span>
      </h1>
      <h2>
        Online query with <em>animes</em> and <em>mangas</em>
      </h2>
    </HeaderWrapper>
  )
}

export default Header