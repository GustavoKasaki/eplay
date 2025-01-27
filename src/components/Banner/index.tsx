import { BannerImg, BannerPrices, BannerTitle } from './styles'
import bannerImg from '../../assets/images/spiderman-banner.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <BannerImg style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Hot Today</Tag>
      <div>
        <BannerTitle>
          Marvel&apos;s Spider-man: Miles Morales PS4 & PS5
        </BannerTitle>
        <BannerPrices>
          From <span>R$ 250,00</span> <br />
          for R$ 99,90
        </BannerPrices>
      </div>
      <Button type="link" title="Check it out" to="/product">
        Check it out
      </Button>
    </div>
  </BannerImg>
)

export default Banner
