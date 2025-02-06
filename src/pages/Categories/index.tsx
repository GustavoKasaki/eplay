import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const sales: Game[] = []

const soon: Game[] = []

const Categories = () => (
  <>
    <ProductsList games={sales} title="RPG" background="gray" />
    <ProductsList games={soon} title="Action" background="black" />
    <ProductsList games={sales} title="Adventure" background="gray" />
    <ProductsList games={soon} title="Sports" background="black" />
  </>
)

export default Categories
