import axios from 'axios'

function Card() {
  axios.get('https://kitsu.io/api/edge/anime?filter[categories]=adventure', {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  })
    .then(response => {
      console.log(response)
    })

  return (
    <article className="card">
      <figure className="figure">
        <p>imagem do personagem</p>
      </figure>
      <h4>Nome principal do personagem</h4>
      <p>Breve descrição do personagem.</p>
      <small>Outros nomes, se houver</small>
    </article>
  )
}

export default Card