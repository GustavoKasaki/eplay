import { useEffect, useState } from 'react'
import { Game } from '../Home'
import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportsGames, setSportsGames] = useState<Game[]>([])
  const [simGames, setSimGames] = useState<Game[]>([])
  const [fightGames, setFightGames] = useState<Game[]>([])
  const [rpgGames, setRpgGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportsGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpgGames(res))
  }, [])

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

export default Categories
