import product1Img from '../assets/products/product-1.svg'
import product2Img from '../assets/products/product-2.svg'
import product3Img from '../assets/products/product-3.svg'
import product4Img from '../assets/products/product-4.svg'
import product5Img from '../assets/products/product-5.svg'
import product6Img from '../assets/products/product-6.svg'
import product7Img from '../assets/products/product-7.svg'
import product8Img from '../assets/products/product-8.svg'
import product9Img from '../assets/products/product-9.svg'
import product10Img from '../assets/products/product-10.svg'
import product11Img from '../assets/products/product-11.svg'
import product12Img from '../assets/products/product-12.svg'
import product13Img from '../assets/products/product-13.svg'
import product14Img from '../assets/products/product-14.svg'

export type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
  tags: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    price: 9.9,
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: product1Img,
    tags: ['TRADICIONAL'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    price: 9.9,
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: product2Img,
    tags: ['TRADICIONAL'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    price: 9.9,
    description: 'Café expresso tradicional com espuma cremosa',
    image: product3Img,
    tags: ['TRADICIONAL'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    price: 9.9,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: product4Img,
    tags: ['TRADICIONAL', 'GELADO'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    price: 9.9,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: product5Img,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 6,
    name: 'Latte',
    price: 9.9,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: product6Img,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 7,
    name: 'Cappuccino',
    price: 9.9,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: product7Img,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 8,
    name: 'Macchiato',
    price: 9.9,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: product8Img,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    price: 9.9,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: product9Img,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    price: 9.9,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: product10Img,
    tags: ['ESPECIAL', 'COM LEITE'],
  },
  {
    id: 11,
    name: 'Cubano',
    price: 9.9,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: product11Img,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    id: 12,
    name: 'Havaiano',
    price: 9.9,
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: product12Img,
    tags: ['ESPECIAL'],
  },
  {
    id: 13,
    name: 'Árabe',
    price: 9.9,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: product13Img,
    tags: ['ESPECIAL'],
  },
  {
    id: 14,
    name: 'Irlandês',
    price: 9.9,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: product14Img,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
  },
]
