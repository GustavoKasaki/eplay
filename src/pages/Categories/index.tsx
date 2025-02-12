import ProductsList from '../../components/ProductsList'

import {
  useGetActionQuery,
  useGetFightQuery,
  useGetRpgQuery,
  useGetSportsQuery,
  useGetSimQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionQuery()
  const { data: sportsGames } = useGetFightQuery()
  const { data: simGames } = useGetRpgQuery()
  const { data: fightGames } = useGetSportsQuery()
  const { data: rpgGames } = useGetSimQuery()

  if (actionGames && sportsGames && simGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Action" background="black" />
        <ProductsList games={sportsGames} title="Sports" background="gray" />
        <ProductsList games={simGames} title="Simulation" background="black" />
        <ProductsList games={fightGames} title="Fight" background="gray" />
        <ProductsList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }

  return <h2>Loading...</h2>
}

export default Categories
