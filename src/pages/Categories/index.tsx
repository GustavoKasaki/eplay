import ProductsList from '../../components/ProductsList'

import {
  useGetActionQuery,
  useGetFightQuery,
  useGetRpgQuery,
  useGetSportsQuery,
  useGetSimQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } = useGetActionQuery()
  const { data: sportsGames, isLoading: isLoadingFight } = useGetFightQuery()
  const { data: simGames, isLoading: isLoadingRpg } = useGetRpgQuery()
  const { data: fightGames, isLoading: isLoadingSports } = useGetSportsQuery()
  const { data: rpgGames, isLoading: isLoadingSim } = useGetSimQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Action"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Sports"
        background="gray"
        id="sports"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={simGames}
        title="Simulation"
        background="black"
        id="sim"
        isLoading={isLoadingSim}
      />
      <ProductsList
        games={fightGames}
        title="Fight"
        background="gray"
        id="fight"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
