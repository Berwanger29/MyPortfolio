import NavBar from "./components/NavBar"
import LeftColumn from './components/LeftColumn'
import RightColumn from "./components/RightColumn"

import { Container } from './styled'

const App = () => {
  return (
    <Container>
      <NavBar />
      <LeftColumn />
      <RightColumn />
    </Container>
  )
}

export default App