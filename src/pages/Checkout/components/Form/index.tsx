import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components/Input'
import {
  Container,
  FormInfo,
  FormInfoContent,
  FormInfoTitle,
  FormInfoTitleContainer,
  FormPayment,
} from './styles'
import { useTheme } from 'styled-components'

export const Form = () => {
  const theme = useTheme()

  return (
    <Container>
      <h1>Complete seu pedido</h1>
      <FormInfo>
        <FormInfoTitleContainer>
          <MapPinLine size={22} color={theme.yellowDark} />
          <FormInfoTitle>
            <h1>Endereço de entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </FormInfoTitle>
        </FormInfoTitleContainer>

        <FormInfoContent>
          <Input placeholder="CEP" />

          <Input placeholder="Rua" />

          <Input placeholder="Número" />
          <Input placeholder="Complemento" />

          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" />
        </FormInfoContent>
      </FormInfo>

      <FormPayment>
        <FormInfoTitleContainer>
          <CurrencyDollar size={22} color={theme.purpleDark} />
          <FormInfoTitle>
            <h1>Pagamento</h1>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar.
            </p>
          </FormInfoTitle>
        </FormInfoTitleContainer>
      </FormPayment>
    </Container>
  )
}
