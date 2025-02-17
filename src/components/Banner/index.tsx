import Tag from '../Tag'
import Button from '../Button'
import { parseToBrl } from '../../utils'

import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <S.BannerImg style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Hot Today</Tag>
        <div>
          <S.BannerTitle>{game.name}</S.BannerTitle>
          <S.BannerPrices>
            From <span>{parseToBrl(game.prices.old)}</span> <br />
            to {parseToBrl(game.prices.current)}
          </S.BannerPrices>
        </div>
        <Button type="link" title="Check it out" to={`/product/${game.id}`}>
          Check it out
        </Button>
      </div>
    </S.BannerImg>
  )
}

export default Banner
