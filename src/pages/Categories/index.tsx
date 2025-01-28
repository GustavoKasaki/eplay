import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'

const sales: Game[] = [
  {
    id: 1,
    category: 'Action',
    description:
      'Resident Evil 4 is a 2005 survival horror game developed and published by Capcom for the GameCube.',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4: Remake'
  },
  {
    id: 2,
    category: 'Adventure',
    description:
      'The Legend of Zelda: Tears of the Kingdom is a 2023 action-adventure game developed and published by Nintendo for the Nintendo Switch.',
    image: zelda,
    infos: ['5%', 'R$ 299,00'],
    system: 'Switch',
    title: 'The Legend of Zelda: Tears of the Kingdom'
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Diablo IV is a 2023 online-only action role-playing dungeon crawling game developed and published by Blizzard Entertainment.',
    image: diablo,
    infos: ['20%', 'R$ 200,00'],
    system: 'Windows',
    title: 'Diablo IV'
  },
  {
    id: 4,
    category: 'Action',
    description:
      'Star Wars Outlaws is a 2024 action-adventure game developed by Massive Entertainment and published by Ubisoft.',
    image: starWars,
    infos: ['5%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Star Wars Outlaws'
  }
]

const soon: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV is a 2023 online-only action role-playing dungeon crawling game developed and published by Blizzard Entertainment.',
    image: diablo,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Diablo IV'
  },
  {
    id: 6,
    category: 'Action',
    description:
      'Resident Evil 4 is a 2005 survival horror game developed and published by Capcom for the GameCube.',
    image: resident,
    infos: ['17/05'],
    system: 'Xbox',
    title: 'Resident Evil 4: Remake'
  },
  {
    id: 7,
    category: 'Adventure',
    description:
      'The Legend of Zelda: Tears of the Kingdom is a 2023 action-adventure game developed and published by Nintendo for the Nintendo Switch.',
    image: zelda,
    infos: ['17/05'],
    system: 'Switch',
    title: 'The Legend of Zelda: Tears of the Kingdom'
  },
  {
    id: 8,
    category: 'Action',
    description:
      'Star Wars Outlaws is a 2024 action-adventure game developed by Massive Entertainment and published by Ubisoft.',
    image: starWars,
    infos: ['17/05'],
    system: 'Playstation',
    title: 'Star Wars Outlaws'
  }
]

const Categories = () => (
  <>
    <ProductsList games={sales} title="RPG" background="gray" />
    <ProductsList games={soon} title="Action" background="black" />
    <ProductsList games={sales} title="Adventure" background="gray" />
    <ProductsList games={soon} title="Sports" background="black" />
  </>
)

export default Categories
