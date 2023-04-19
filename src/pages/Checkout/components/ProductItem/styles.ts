import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.baseButton};

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
  gap: 0.75rem;

  > p {
    font: 400 1rem 'Roboto', sans-serif;
    color: ${({ theme }) => theme.baseSubtitle};
  }
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

export const ActionRemove = styled.button`
  border: none;
  padding: 0.5rem;
  background: ${({ theme }) => theme.baseButton};
  border-radius: 6px;
  cursor: pointer;
  font: 400 0.75rem 'Roboto', sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  :hover {
    background: ${({ theme }) => theme.baseHover};
    transition: background 0.2s;
  }
`
