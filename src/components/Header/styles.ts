import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 70rem;
  margin: 0 auto;

  padding: 2rem 0;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 0;
  cursor: pointer;

  border-radius: 6px;
  background: ${({ theme }) => theme.purpleLight};

  color: ${({ theme }) => theme.purpleDark};
`

export const CartButton = styled(Link)`
  padding: 1rem;
  border: 0;
  cursor: pointer;
  background: ${({ theme }) => theme.yellowLight};
  color: ${({ theme }) => theme.yellowDark};
  border-radius: 6px;

  position: relative;

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: ${({ theme }) => theme.yellowDark};
    color: ${({ theme }) => theme.white};
    border-radius: 999px;
    width: 1.25rem;
    height: 1.25rem;
    font: 700 0.75rem 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
