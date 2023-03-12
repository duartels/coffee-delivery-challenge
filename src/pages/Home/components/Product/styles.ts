import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  background: ${({ theme }) => theme.baseCard};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;
`

export const ImageContainer = styled.div`
  margin-top: -1.25rem;
`

export const Types = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
`

export const Type = styled.div`
  background: ${({ theme }) => theme.yellowLight};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  color: ${({ theme }) => theme.yellowDark};
  text-transform: uppercase;
  font: 700 0.625rem 'Roboto', sans-serif;
`

export const Title = styled.h3`
  margin-top: 1rem;
  font: 700 1.25rem 'Baloo 2', cursive;
`

export const Description = styled.p`
  margin-top: 0.5rem;
  padding: 0 1.25rem;
  text-align: center;
`

export const InfoContainer = styled.div`
  padding: 2rem 1.25rem 1.25rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InfoPrice = styled.div`
  font: 700 1.5rem 'Baloo 2', cursive;

  span {
    font: 400 0.875rem 'Roboto', sans-serif;
  }
`

export const InfoActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const InfoQuantity = styled.div`
  display: flex;
  gap: 0.5rem;
  background: ${({ theme }) => theme.baseButton};
  padding: 0.5rem;
  border-radius: 6px;

  button {
    border: none;
    color: ${({ theme }) => theme.purple};
    cursor: pointer;
    transition: color 0.2s;

    :hover {
      color: ${({ theme }) => shade(0.2, theme.purple)};
    }
  }
`

export const InfoAddToCart = styled.button`
  background: ${({ theme }) => theme.purpleDark};
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;

  :hover {
    background: ${({ theme }) => shade(0.2, theme.purpleDark)};
  }
`
