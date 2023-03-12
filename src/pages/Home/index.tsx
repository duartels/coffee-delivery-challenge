import { Container } from './styles'

import { Banner } from './components/Banner'
import { Products } from './components/Products'

export const Home = () => {
  return (
    <Container>
      <Banner />

      <Products />
    </Container>
  )
}
