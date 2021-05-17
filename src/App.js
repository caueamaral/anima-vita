import './App.css'
import Header from './components/Header/index.js'
import Main   from './components/Main/index.js'
import Footer from './components/Footer/index.js'
import styled from 'styled-components'

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

export default App