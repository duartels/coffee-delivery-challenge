import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

type InfoTotalProps = {
  strong?: boolean
}

export const InfoTotal = styled.div<InfoTotalProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font: ${({ strong }) => (strong ? '700 1.25rem' : '400 1rem')} 'Roboto',
    sans-serif;
`
