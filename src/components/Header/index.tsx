import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'

import { CartButton, HeaderBar, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
      <CartButton onClick={openCart}>
        {items.length} produto(s)
        <img src={cart} alt="Cart" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
