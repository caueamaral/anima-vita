import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>AnimaVita</h1>
        <h3>Consultas online com animes e mangás</h3>
      </header>
      <article>
        <p>Utilizando a API Kitsu, gostaríamos de renderizar uma lista de personagens em formato de cards, 
          conforme o exemplo abaixo.</p>
        <p>Nossa dupla de designer e desenvolvedor saiu de férias, 
          precisamos melhorar a interface e usabilidade desta página também. <br/>
          Não temos preferência sobre as tecnologias envolvidas no projeto. <br/>
          Pode usar frameworks e libraries ou desenvolver em vanilla. <br/>
          Pode ser css puro, pode ser sass, pode ser bulma, pode ser bootstrap... <br/>
        </p>
        <p><strong>Os requisitos e instruções para completar este projeto podem ser encontrados no arquivo README no GitLab.</strong></p>
      </article>
      <main>
        <div className="card">
          <figure className="figure">
            <p>imagem do personagem</p>
          </figure>
          <h4>Nome principal do personagem</h4>
          <p>Breve descrição do personagem.</p>
          <small>Outros nomes, se houver</small>
        </div>
      </main>
      <footer>
        <p><strong>Telavita 2020 Todos os direitos reservados. </strong></p>
      </footer>
    </div>
  );
}

export default App;
