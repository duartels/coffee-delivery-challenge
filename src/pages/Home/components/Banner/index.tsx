import { ReactNode } from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  Container,
  Content,
  Info,
  InfoDescription,
  InfoItem,
  InfoItemDescription,
  InfoItemIcon,
  InfoItemProps,
  InfoItems,
  InfoText,
  InfoTitle,
} from './styles'

import coffeeHome from '../../../../assets/coffee-home.svg'

type BannerData = {
  id: number
  icon: ReactNode
  description: string
} & InfoItemProps

const BANNER_DATA: BannerData[] = [
  {
    id: 1,
    icon: <ShoppingCart size={16} color="#FFF" weight="fill" />,
    description: 'Compra simples e segura',
    color: 'yellowDark',
  },
  {
    id: 2,
    icon: <Package size={16} color="#FFF" weight="fill" />,
    description: 'Embalagem mantém o café intacto',
    color: 'baseText',
  },
  {
    id: 3,
    icon: <Timer size={16} color="#FFF" weight="fill" />,
    description: 'Entrega rápida e rastreada',
    color: 'yellow',
  },
  {
    id: 4,
    icon: <Coffee size={16} color="#FFF" weight="fill" />,
    description: 'O café chega fresquinho até você',
    color: 'purple',
  },
]

export const Banner = () => {
  return (
    <Container>
      <Content>
        <Info>
          <InfoText>
            <InfoTitle>
              Encontre o café perfeito para qualquer hora do dia
            </InfoTitle>
            <InfoDescription>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </InfoDescription>
          </InfoText>

          <InfoItems>
            {BANNER_DATA.map((data) => (
              <InfoItem key={data.id}>
                <InfoItemIcon color={data.color}>{data.icon}</InfoItemIcon>
                <InfoItemDescription>{data.description}</InfoItemDescription>
              </InfoItem>
            ))}
          </InfoItems>
        </Info>

        <img src={coffeeHome} alt="" />
      </Content>
    </Container>
  )
}
