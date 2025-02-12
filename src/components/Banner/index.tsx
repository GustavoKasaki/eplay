import { BannerImg, BannerPrices, BannerTitle } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { priceFormat } from '../ProductsList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

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
        <Button type="link" title="Check it out" to={`/product/${game.id}`}>
          Check it out
        </Button>
      </div>
    </BannerImg>
  )
}

export default Banner
