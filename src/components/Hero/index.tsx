import { useDispatch } from 'react-redux'

import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>

          <p>
            {game.prices.discount && <span>{parseToBrl(game.prices.old)}</span>}
            {game.prices.current && <p>{parseToBrl(game.prices.current)}</p>}
            {game.prices.current === null ? <p>TBD</p> : ''}
          </p>

          {game.prices.current && (
            <Button
              variant="primary"
              type={'button'}
              title={'Click to add to cart'}
              onClick={addToCart}
            >
              Add to cart
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
