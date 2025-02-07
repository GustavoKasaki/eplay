import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'
import { BannerImg, BannerPrices, BannerTitle } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { priceFormat } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <BannerImg style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Hot Today</Tag>
        <div>
          <BannerTitle>{game.name}</BannerTitle>
          <BannerPrices>
            From <span>{priceFormat(game.prices.old)}</span> <br />
            to {priceFormat(game.prices.current)}
          </BannerPrices>
        </div>
        <Button type="link" title="Check it out" to="/product">
          Check it out
        </Button>
      </div>
    </BannerImg>
  )
}

export default Banner
