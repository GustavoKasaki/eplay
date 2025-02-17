import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import {
  CartButton,
  Hamburguer,
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
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
          {items.length}
          <span>product(s)</span>
          <img src={cart} alt="Cart" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
