import { Trash } from 'phosphor-react'
import { CartProduct } from '../../../../context/CartContext'
import { useCart } from '../../../../hooks/useCart'
import {
  ActionQuantity,
  ActionRemove,
  ActionsContainer,
  Container,
  DetailsContainer,
  InfoContainer,
} from './styles'
import { useTheme } from 'styled-components'

type ProductItemProps = {
  product: CartProduct
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const { addToCart, removeFromCart } = useCart()
  const theme = useTheme()

  const increaseAmount = () => {
    addToCart(product, 1)
  }

  const decreaseAmount = () => {
    addToCart(product, -1)
  }

  const handleRemove = () => {
    removeFromCart(product.id)
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

            <ActionRemove onClick={handleRemove}>
              <Trash size={16} color={theme.purple} />
              REMOVER
            </ActionRemove>
          </ActionsContainer>
        </DetailsContainer>
      </InfoContainer>

      <p>R$ {priceFormatted}</p>
    </Container>
  )
}
