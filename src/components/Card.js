import { useEffect, useState } from 'react'
import axios                   from 'axios'
import styled                  from 'styled-components'

const CardWrapper = styled.section`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  article {
    background: var(--white);
    border-radius: var(--rounded);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .15);
    padding: 20px;
  }

  img {
    border-radius: var(--rounded);
    width: 100%;
  }

  h3 {
    font-family: var(--title-font);
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
  }
`

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
          description
        } = card.attributes

        return (
          <article key={card.id}>
            <figure>
              <p>
                <img src={medium} />
              </p>
            </figure>
            <h3>
              {canonicalTitle}
            </h3>
            <p>
              {description.substring(0, 150)}...
            </p>
            <small>
              Outros nomes, se houver
            </small>
          </article>
        )
      })}
    </CardWrapper>
  )
}

export default Card