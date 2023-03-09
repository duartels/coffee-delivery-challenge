import {
  Banner,
  BannerContent,
  BannerInfo,
  BannerInfoDescription,
  BannerInfoItem,
  BannerInfoItems,
  BannerInfoText,
  BannerInfoTitle,
  Container,
} from './styles'

import coffeeHome from '../../assets/coffee-home.svg'

export const Home = () => {
  return (
    <Container>
      <Banner>
        <BannerContent>
          <BannerInfo>
            <BannerInfoText>
              <BannerInfoTitle>
                Encontre o café perfeito para qualquer hora do dia
              </BannerInfoTitle>
              <BannerInfoDescription>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </BannerInfoDescription>
            </BannerInfoText>

            <BannerInfoItems>
              <BannerInfoItem>teste</BannerInfoItem>
            </BannerInfoItems>
          </BannerInfo>

          <img src={coffeeHome} alt="" />
        </BannerContent>
      </Banner>
    </Container>
  )
}
