import { useEffect, useState } from 'react'
import axios         from 'axios'

function Card() {
  const [cards, setCards] = useState([])

   useEffect(() => {
    const apiUrl = 'https://kitsu.io/api/edge/anime'

    axios.get(apiUrl, {
      headers: {
        'Accept':       'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    })
      .then(response => setCards(response.data.data))
  }, [])

  return (
    <div>
      {cards.map(card => {
        let {
          posterImage: {medium},
          canonicalTitle,
          description
        } = card.attributes

        return (
          <article className="card" key={card.id}>
            <figure className="figure">
              <p>
                <img src={medium} />
              </p>
            </figure>
            <h4>
              {canonicalTitle}
            </h4>
            <p>
              {description}
            </p>
            <small>Outros nomes, se houver</small>
          </article>
        )
      })}
    </div>
  )
}

export default Card