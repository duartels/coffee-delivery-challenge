import styled from 'styled-components'

import backgroundHome from '../../../../assets/background-home.svg'

export const Container = styled.div`
  min-height: 34rem;
  background-image: url(${backgroundHome});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
`

export const Content = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4.125rem;
`

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  line-height: 3.9rem;
  color: ${({ theme }) => theme.baseSubtitle};
`

export const InfoDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.625;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.baseSubtitle};
`

export const InfoItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export type InfoItemProps = {
  color: 'yellow' | 'yellowDark' | 'baseText' | 'purple'
}

export const InfoItemIcon = styled.div<InfoItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme, color }) => theme[color]};
`

export const InfoItemDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`
