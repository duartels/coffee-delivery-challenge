import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartButton, Container, LocationButton, NavContainer } from './styles'

import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo" />

      <NavContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre</span>
        </LocationButton>

        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </NavContainer>
    </Container>
  )
}
