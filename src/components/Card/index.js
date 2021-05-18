import { useEffect, useState } from 'react'
import axios                   from 'axios'
import CardWrapper             from './styles.js'

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
    <CardWrapper>
      {cards.map(card => {
        let {
          posterImage: {medium},
          canonicalTitle,
          description,
          titles
        } = card.attributes

        return (
          <article key={card.id}>
            <figure>
              <p>
                <img src={medium} alt={canonicalTitle} />
              </p>
            </figure>
            <h3>
              {canonicalTitle}
            </h3>
            <p>
              {description.substring(0, 150)}...
            </p>
            <small>
              <strong>En:</strong> {titles.en}<br />              
              <strong>En Jp:</strong> {titles.en_jp}<br />
              <strong>Ja Jp:</strong> {titles.ja_jp}
            </small>
          </article>
        )
      })}
    </CardWrapper>
  )
}

export default Card