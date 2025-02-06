import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import resident from '../../assets/images/resident.png'

import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="About the game" background="black">
        <p>
          Hogwarts Legacy is an action role-playing game played from a
          third-person perspective. It is set at Hogwarts School of Witchcraft
          and Wizardry and its surrounding areas, influenced by the Wizarding
          World franchise. When creating a character, players can customize
          several features, such as their character&apos;s look, complexion,
          vocal characteristics, and whether they wish to be housed in a Witch
          or Wizard dormitory. They must also choose one of the four Hogwarts
          Houses. Taking part in and completing classes is essential to the
          storyline, as it unlocks certain gameplay mechanics, including the
          option to fly on brooms.
        </p>
      </Section>
      <Section title="More info" background="gray">
        <p>
          <b>Platform:</b> PlayStation 5 <br />
          <b>Developer:</b> Avalanche Software <br />
          <b>Publisher:</b> Portkey Games, a subsidiary of Warner Bros.
          Interactive Entertainment <br />
          <b>Languages:</b> The game supports multiple languages, including
          English, Spanish, French, German, Italian, Portuguese, among others.
          Audio and subtitle options can be adjusted in the game settings.
        </p>
      </Section>
      <Gallery name="test" defaultCover={resident} />
    </>
  )
}

export default Product
