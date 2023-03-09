import styled from 'styled-components'

import backgroundHome from '../../assets/background-home.svg'

export const Container = styled.div``

export const Banner = styled.div`
  min-height: 34rem;
  background-image: url(${backgroundHome});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
`

export const BannerContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4.125rem;
`

export const BannerInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BannerInfoTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  line-height: 3.9rem;
  color: ${({ theme }) => theme.baseSubtitle};
`

export const BannerInfoDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.625;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.baseSubtitle};
`

export const BannerInfoItems = styled.div``

export const BannerInfoItem = styled.div``
