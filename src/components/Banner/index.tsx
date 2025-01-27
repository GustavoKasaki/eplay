import { BannerImg, BannerPrices, BannerTitle } from './styles'
import bannerImg from '../../assets/images/spiderman-banner.png'

const Banner = () => (
  <BannerImg style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <BannerTitle>
        Marvel&apos;s Spider-man: Miles Morales PS4 & PS5
      </BannerTitle>
      <BannerPrices>
        From <span>R$ 250,00</span> <br />
        for R$ 99,90
      </BannerPrices>
    </div>
  </BannerImg>
)

export default Banner
