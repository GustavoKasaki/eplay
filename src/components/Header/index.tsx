import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to={'/'}>
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link title="Click to view categories page" to={'/categories'}>
                  Categories
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink title="Click to view games TBD" to="/#soon">
                  Soon
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink title="Click to view games on sale" to="/#on-sale">
                  On sale
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length}
          <span>product(s)</span>
          <img src={cart} alt="Cart" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Click to view categories page"
              to={'/categories'}
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Click to view games TBD"
              to="/#soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Soon
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Click to view games on sale"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              On sale
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
