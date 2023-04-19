import { useCart } from '../../../../hooks/useCart'
import { ProductItem } from '../ProductItem'
import { ProductsTotal } from '../ProductsTotal'
import { ConfirmOrderButton, Container, ProductListContainer } from './styles'

export const ProductList = () => {
  const { cart } = useCart()

  return (
    <Container>
      <h1>Cafés selecionados</h1>

      <ProductListContainer>
        {cart.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}

        <ProductsTotal />

        <ConfirmOrderButton type="submit">CONFIRMAR PEDIDO</ConfirmOrderButton>
      </ProductListContainer>
    </Container>
  )
}
