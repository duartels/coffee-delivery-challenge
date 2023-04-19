import styled from 'styled-components'

export const Container = styled.div`
  > h1 {
    font: 700 1.125rem 'Baloo 2', cursive;
    color: ${({ theme }) => theme.baseSubtitle};
    margin-bottom: 1.125rem;
  }
`

export const ProductListContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${({ theme }) => theme.baseCard};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  font: 700 0.875rem 'Roboto', sans-serif;
`
