import { useForm } from 'react-hook-form'

import { Form } from './components/Form'
import { ProductList } from './components/ProductList'
import { Container } from './styles'

export const Checkout = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Form />

      <ProductList />
    </Container>
  )
}
