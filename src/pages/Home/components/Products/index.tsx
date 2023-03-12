import { Product } from '../Product'
import { Container, Content, Title } from './styles'

export const Products = () => {
  return (
    <Container>
      <Title>Nossos cafés</Title>

      <Content>
        <Product />
        <Product />
        <Product />
        <Product />
      </Content>
    </Container>
  )
}
