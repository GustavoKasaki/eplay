import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="About the game" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="More info" background="gray">
        <p>
          <b>Platform:</b>
          {game.details.system} <br />
          <b>Developer:</b> {game.details.developer} <br />
          <b>Publisher:</b> {game.details.publisher} <br />
          <b>Languages:</b> {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
