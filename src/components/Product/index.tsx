import Tag from '../Tag'
import { Card, CardDescription, CardTitle, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardTitle>{title}</CardTitle>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <CardDescription>{description}</CardDescription>
  </Card>
)

export default Product
