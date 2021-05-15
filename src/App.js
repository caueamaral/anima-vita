import './App.css'
import Header      from './components/Header.js'
import Description from './components/Description.js'
import Card        from './components/Card.js'
import Footer      from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <main>
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App