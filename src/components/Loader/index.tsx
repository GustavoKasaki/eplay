import { PacmanLoader } from 'react-spinners'

import { Container } from './styles'
import { Colors } from '../../styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={Colors.white} />
  </Container>
)

export default Loader
