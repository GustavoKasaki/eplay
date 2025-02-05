import banner from '../../assets/images/hogwarts-bg.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>From R$250,00</span>
          For R$190,00
        </p>
        <Button
          variant="primary"
          type={'button'}
          title={'Click to add to cart'}
        >
          Add to cart
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
