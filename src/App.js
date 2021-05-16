import './App.css'
import Header from './components/Header.js'
import Card   from './components/Card.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App