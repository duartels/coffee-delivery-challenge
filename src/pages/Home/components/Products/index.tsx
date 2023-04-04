import { products } from '../../../../utils/products'
import { Product } from '../Product'
import { Container, Content, Title } from './styles'

export const Products = () => {
  return (
    <Container>
      <Title>Nossos cafés</Title>

      <Content>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  )
}
