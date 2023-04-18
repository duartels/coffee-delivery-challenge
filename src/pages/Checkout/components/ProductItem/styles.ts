import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 3.125rem;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ActionQuantity = styled.div`
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
