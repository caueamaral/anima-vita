import { useEffect, useState } from 'react'
import axios                   from 'axios'
import CardWrapper             from './styles.js'

function Card(props) {
  const [cards, setCards] = useState([])

   useEffect(() => {
    const apiUrl     = 'https://kitsu.io/api/edge/anime'
    const apiHeaders = {'Accept': 'application/vnd.api+json', 'Content-Type': 'application/vnd.api+json'}

    axios
      .get(apiUrl, { headers: apiHeaders })
      .then(response => {
        props.setLoading(false)

        setCards(response.data.data)
      })
  }, [props])

  const renderIdiom = (title, idiom) => {
    if (idiom) {
      return (
        <>
          <strong>{title}: </strong>{idiom}
        </>
      )
    }
  }

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
              <img src={medium} alt={canonicalTitle} />
            </figure>
            <h3>
              {canonicalTitle}
            </h3>
            <p>
              {description.substring(0, 150)}...
            </p>
            <small>
              {renderIdiom('En',    titles.en)}   <br />
              {renderIdiom('En Jp', titles.en_jp)}<br />
              {renderIdiom('Ja Jp', titles.ja_jp)}
            </small>
          </article>
        )
      })}
    </CardWrapper>
  )
}

export default Card