import styled from 'styled-components'

export const Container = styled.div`
  > h1 {
    font: 700 1.125rem 'Baloo 2', cursive;
    color: ${({ theme }) => theme.baseSubtitle};
    margin-bottom: 1.125rem;
  }
`

export const FormInfo = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.baseCard};
`

export const FormInfoTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

export const FormInfoTitle = styled.div`
  color: ${({ theme }) => theme.baseSubtitle};
  margin-bottom: 2rem;

  h1 {
    font: 400 1rem 'Roboto', sans-serif;
    margin-bottom: 0.25rem;
  }

  p {
    font: 400 0.875rem 'Roboto', sans-serif;
  }
`

export const FormInfoContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));

  gap: 1rem;

  > input:first-child {
    grid-column: span 4;
  }

  > input:nth-child(2) {
    grid-column: span 12;
    grid-row: 2;
  }

  > input:nth-child(3) {
    grid-column: span 4;
    grid-row: 3;
  }

  > input:nth-child(4) {
    grid-column: span 8;
    grid-row: 3;
  }

  > input:nth-child(5) {
    grid-column: span 4;
    grid-row: 4;
  }

  > input:nth-child(6) {
    grid-column: span 6;
    grid-row: 4;
  }

  > input:nth-child(7) {
    grid-column: span 2;
    grid-row: 4;
  }
`

export const FormPayment = styled(FormInfo)`
  margin-top: 0.75rem;
`
