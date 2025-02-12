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
        <ProductsList
          games={actionGames}
          title="Action"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportsGames}
          title="Sports"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simGames}
          title="Simulation"
          background="black"
          id="sim"
        />
        <ProductsList
          games={fightGames}
          title="Fight"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }

  return <h2>Loading...</h2>
}

export default Categories
