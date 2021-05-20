import { useState, useEffect } from 'react'
import ClipLoader              from 'react-spinners/ClipLoader'

import Header      from './components/Header/index.js'
import Main        from './components/Main/index.js'
import Footer      from './components/Footer/index.js'
import GlobalStyle from './GlobalStyle.js'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <div className="app">
      <Header />
      {
        loading
          ? <ClipLoader color="#fff" size="50" />
          : <Main setLoading={setLoading} />
      }
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App