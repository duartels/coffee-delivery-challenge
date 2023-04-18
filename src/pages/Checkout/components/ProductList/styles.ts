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
