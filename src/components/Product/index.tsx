import Tag from '../Tag'
import { Card, CardDescription, CardTitle } from './styles'

const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" alt="" />
    <CardTitle>Nome do jogo</CardTitle>
    <Tag>Genre</Tag>
    <Tag>Windows</Tag>
    <CardDescription>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga impedit
      placeat quas iste repudiandae, similique iusto ut dolorum quae nobis
      corporis minus omnis! Ut perspiciatis rerum tempora laborum voluptatibus?
    </CardDescription>
  </Card>
)

export default Product
