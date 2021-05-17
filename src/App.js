import Header      from './components/Header/index.js'
import Main        from './components/Main/index.js'
import Footer      from './components/Footer/index.js'
import GlobalStyle from './GlobalStyle.js'

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App