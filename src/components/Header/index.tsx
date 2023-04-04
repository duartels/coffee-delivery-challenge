import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartButton, Container, LocationButton, NavContainer } from './styles'

import Logo from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

export const Header = () => {
  const { cart } = useCart()

  const cartSize = cart.length

  return (
    <Container>
      <img src={Logo} alt="Logo" />

      <NavContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre</span>
        </LocationButton>

        <CartButton>
          <span>{cartSize}</span>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </NavContainer>
    </Container>
  )
}
