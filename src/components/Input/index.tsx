import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
  return <Container {...props}></Container>
}
