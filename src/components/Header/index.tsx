import { CartLink, HeaderBar, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY logo" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Genre</a>
          </LinkItem>
          <LinkItem>
            <a href="#">New</a>
          </LinkItem>
          <LinkItem>
            <a href="#">On sale</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <CartLink href="#">
      0 produto(s)
      <img src={cart} alt="Cart" />
    </CartLink>
  </HeaderBar>
)

export default Header
