import styled from 'styled-components'

export const Container = styled.input`
  padding: 0.75rem;
  background: ${({ theme }) => theme.baseInput};
  border-radius: 4px;
  border: 0;
  color: ${({ theme }) => theme.baseText};
  font: 400 1rem 'Roboto', sans-serif;

  &:focus {
    border: 1px solid ${({ theme }) => theme.yellowDark};
    box-shadow: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.baseLabel};
  }
`
