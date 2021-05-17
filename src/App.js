import './App.css'
import Header from './components/Header.js'
import Main   from './components/Main.js'
import Footer from './components/Footer.js'
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