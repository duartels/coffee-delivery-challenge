import {
  Container,
  ImageContainer,
  Types,
  Title,
  Description,
  InfoContainer,
  InfoPrice,
  InfoActions,
  InfoQuantity,
  InfoAddToCart,
  Type,
} from './styles'

import product1 from '../../../../assets/products/product-1.svg'
import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

export const Product = () => {
  const [amount, setAmount] = useState(1)

  const increaseAmount = () => {
    setAmount(amount + 1)
  }

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  return (
    <Container>
      <ImageContainer>
        <img src={product1} alt="" />
      </ImageContainer>

      <Types>
        <Type>Tradicional</Type>
        <Type>Expresso</Type>
      </Types>

      <Title>Expresso Tradicional</Title>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <InfoContainer>
        <InfoPrice>
          <span>R$</span> 12,90
        </InfoPrice>
        <InfoActions>
          <InfoQuantity>
            <button onClick={decreaseAmount}>-</button>
            <div>{amount}</div>
            <button onClick={increaseAmount}>+</button>
          </InfoQuantity>
          <InfoAddToCart>
            <ShoppingCart weight="fill" color="#FFF" size={20} />
          </InfoAddToCart>
        </InfoActions>
      </InfoContainer>
    </Container>
  )
}
