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

export const CartButton = styled.button`
  padding: 1rem;
  border: 0;
  cursor: pointer;
  background: ${({ theme }) => theme.yellowLight};
  color: ${({ theme }) => theme.yellowDark};
  border-radius: 6px;
`
