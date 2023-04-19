import { useCart } from '../../../../hooks/useCart'
import { Container, InfoTotal } from './styles'

const TOTAL_DELIVERY = 3.5
const TOTAL_DELIVERY_FORMATTED = TOTAL_DELIVERY.toFixed(2).replace('.', ',')

export const ProductsTotal = () => {
  const { cart } = useCart()

  const totalItens = cart.reduce((acc, product) => {
    return acc + product.price * product.amount
  }, 0)
  const totalItensFormatted = totalItens.toFixed(2).replace('.', ',')

  const total = totalItens + TOTAL_DELIVERY
  const totalFormatted = total.toFixed(2).replace('.', ',')

  return (
    <Container>
      <InfoTotal>
        <p>Total de itens</p>
        <p>R$ {totalItensFormatted}</p>
      </InfoTotal>

      <InfoTotal>
        <p>Entrega</p>
        <p>R$ {TOTAL_DELIVERY_FORMATTED}</p>
      </InfoTotal>

      <InfoTotal strong>
        <p>Total</p>
        <p>R$ {totalFormatted}</p>
      </InfoTotal>
    </Container>
  )
}
