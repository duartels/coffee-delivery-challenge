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

import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Product as ProductType } from '../../../../utils/products'
import { useCart } from '../../../../hooks/useCart'

type ProductProps = {
  product: ProductType
}

export const Product = ({ product }: ProductProps) => {
  const [amount, setAmount] = useState(1)

  const { addToCart } = useCart()

  const increaseAmount = () => {
    setAmount(amount + 1)
  }

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  const priceFormatted = product.price.toFixed(2).replace('.', ',')

  return (
    <Container>
      <ImageContainer>
        <img src={product.image} alt="" />
      </ImageContainer>

      <Types>
        {product.tags.map((type) => (
          <Type key={type}>{type}</Type>
        ))}
      </Types>

      <Title>{product.name}</Title>

      <Description>{product.description}</Description>

      <InfoContainer>
        <InfoPrice>
          <span>R$</span> {priceFormatted}
        </InfoPrice>
        <InfoActions>
          <InfoQuantity>
            <button onClick={decreaseAmount}>-</button>
            <div>{amount}</div>
            <button onClick={increaseAmount}>+</button>
          </InfoQuantity>
          <InfoAddToCart onClick={handleAddToCart}>
            <ShoppingCart weight="fill" color="#FFF" size={20} />
          </InfoAddToCart>
        </InfoActions>
      </InfoContainer>
    </Container>
  )
}
