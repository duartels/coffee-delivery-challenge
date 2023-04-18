import { CartProduct } from '../../../../context/CartContext'
import { useCart } from '../../../../hooks/useCart'
import {
  ActionQuantity,
  ActionsContainer,
  Container,
  DetailsContainer,
  InfoContainer,
} from './styles'

type ProductItemProps = {
  product: CartProduct
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const { addToCart } = useCart()

  const increaseAmount = () => {
    addToCart(product, 1)
  }

  const decreaseAmount = () => {
    addToCart(product, -1)
  }

  const priceFormatted = product.price.toFixed(2).replace('.', ',')
  return (
    <Container>
      <InfoContainer>
        <img src={product.image} alt={product.name} />

        <DetailsContainer>
          <p>{product.name}</p>
          <ActionsContainer>
            <ActionQuantity>
              <button
                onClick={decreaseAmount}
                type="button"
                disabled={product.amount === 1}
              >
                -
              </button>
              <div>{product.amount}</div>
              <button onClick={increaseAmount} type="button">
                +
              </button>
            </ActionQuantity>
          </ActionsContainer>
        </DetailsContainer>
      </InfoContainer>

      <p>R$ {priceFormatted}</p>
    </Container>
  )
}
