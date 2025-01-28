import { Link } from 'react-router-dom'

import { CartLink, HeaderBar, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to={'/'}>
        <img src={logo} alt="EPLAY logo" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to={'/categories'}>Categories</Link>
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
