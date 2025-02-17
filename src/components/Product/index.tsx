import Tag from '../Tag'
import * as S from './styles'

type Props = {
  id: number
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  id,
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <S.Card
      title={`Click to view more info about this game`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.CardTitle>{title}</S.CardTitle>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.CardDescription>{getDescription(description)}</S.CardDescription>
    </S.Card>
  )
}

export default Product
