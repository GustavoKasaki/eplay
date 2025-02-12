import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'

import starwars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={starwars} alt="Star wars" />
          <div>
            <h3>Star wars</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={starwars} alt="Star wars" />
          <div>
            <h3>Star wars</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 game(s) on cart</Quantity>
      <Prices>
        Total: R$ 250,00 <span>up to 6 interest-free payments</span>
      </Prices>
      <Button type={'button'} title={'Proceed to checkout'}>
        Proceed to checkout
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
