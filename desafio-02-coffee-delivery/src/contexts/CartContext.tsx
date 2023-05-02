import React, { createContext, useState } from 'react'

import Tradicional from '../assets/Tradicional.svg'
import Americano from '../assets/ImageAmericano.svg'
import Cremoso from '../assets/ImageExpressoCremoso.svg'
import Gelado from '../assets/ImageCafegelado.svg'
import Leite from '../assets/ImageCafeComLeite.svg'
import Latte from '../assets/ImageLatte.svg'
import Capuccino from '../assets/ImageCapuccino.svg'
import Macchiato from '../assets/ImageMacchiato.svg'
import Maccino from '../assets/ImageMochaccino.svg'
import Chocolate from '../assets/ImageChocolateQuente.svg'
import Cubano from '../assets/ImageCubano.svg'
import Havaiano from '../assets/ImageHavaiano.svg'
import Arabe from '../assets/ImageArabe.svg'
import Irlandes from '../assets/ImageIrlandes.svg'

enum CoffeeTag {
  AoLeite = 'COM LEITE',
  Alcoolico = 'ALCOÓLICO',
  Tradicional = 'TRADICIONAL',
  Especial = 'ESPECIAL',
  Gelado = 'GELADO',
}

interface Coffee {
  name: string
  price: number
  quantity: number
  image: string
  description: string
  tag?: CoffeeTag[]
}

interface Order {
  coffee: Coffee
  quantityCoffee: number
}
interface Address {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}
type PaymentOption = 'credit' | 'debit' | 'cash'

type CoffeeContextType = {
  coffeeList: Coffee[]
  orders: Order[]
  total: number
  quantity: number
  address: Address
  setAddress: (address: Address) => void
  handleAddToCart: (coffee: Coffee) => void
  handleIncrement: (index: number) => void
  handleDecrement: (index: number) => void
  handleRemoveFromCart: (index: number) => void
  calculateTotal: () => number
  paymentOption: PaymentOption
  setPaymentOption: React.Dispatch<React.SetStateAction<PaymentOption>>
}

export const CoffeeContext = createContext<CoffeeContextType>({
  coffeeList: [],
  orders: [],
  total: 0,
  quantity: 0,
  address: {
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  },
  setAddress: () => {},
  handleAddToCart: () => {},
  handleIncrement: () => {},
  handleDecrement: () => {},
  handleRemoveFromCart: () => {},
  calculateTotal: () => 0,
  paymentOption: 'credit',
  setPaymentOption: () => {},
})

type Props = {
  children: React.ReactNode
}

const CartProvider = ({ children }: Props) => {
  const [address, setAddress] = useState<Address>({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  })
  const [quantity, setQuantity] = useState<number>(0)

  const [coffeeList, setCoffeeList] = useState<Coffee[]>([
    {
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.99,

      quantity: 0,
      image: Tradicional,
      tag: [CoffeeTag.Tradicional],
    },
    {
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.99,

      quantity: 0,
      image: Americano,
      tag: [CoffeeTag.Tradicional],
    },
    {
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.99,

      quantity: 0,
      image: Cremoso,
      tag: [CoffeeTag.Tradicional],
    },
    {
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.99,

      quantity: 0,
      image: Gelado,
      tag: [CoffeeTag.Tradicional, CoffeeTag.Gelado],
    },
    {
      name: 'Café com Leite',
      description: 'Meio a meio de expresso com leite vaporizado',
      price: 9.99,

      quantity: 0,
      image: Leite,
      tag: [CoffeeTag.Tradicional, CoffeeTag.AoLeite],
    },
    {
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.99,

      quantity: 0,
      image: Latte,
      tag: [CoffeeTag.Tradicional, CoffeeTag.AoLeite],
    },
    {
      name: 'Capuccino',
      description: 'Café expresso com leite vaporizado e espuma de leite',
      price: 9.99,

      quantity: 0,
      image: Capuccino,
      tag: [CoffeeTag.Tradicional, CoffeeTag.AoLeite],
    },
    {
      name: 'Macchiato',
      description:
        'Café expresso com uma pequena quantidade de leite vaporizado e espuma',
      price: 11.99,
      quantity: 0,

      image: Macchiato,
      tag: [CoffeeTag.Tradicional, CoffeeTag.AoLeite],
    },
    {
      name: 'Mochaccino',
      description:
        'Café expresso com leite vaporizado, espuma de leite e chocolate em pó',
      price: 12.99,
      quantity: 0,

      image: Maccino,
      tag: [CoffeeTag.Tradicional, CoffeeTag.AoLeite],
    },
    {
      name: 'Chocolate Quente',
      description: 'Bebida quente à base de leite e chocolate em pó',
      price: 9.99,

      quantity: 0,
      image: Chocolate,
      tag: [CoffeeTag.Especial, CoffeeTag.AoLeite],
    },
    {
      name: 'Café Cubano',
      description:
        'Café expresso preparado com açúcar refinado e servido em pequena quantidade',
      price: 13.99,
      quantity: 0,

      image: Cubano,
      tag: [CoffeeTag.Especial, CoffeeTag.Alcoolico, CoffeeTag.Gelado],
    },
    {
      name: 'Café Havaiano',
      description: 'Café expresso com leite de coco e xarope de macadâmia',
      price: 15.99,
      quantity: 0,

      image: Havaiano,
      tag: [CoffeeTag.Especial],
    },
    {
      name: 'Café Árabe',
      description: 'Café expresso com cardamomo e espuma de leite',
      price: 14.99,
      quantity: 0,

      image: Arabe,
      tag: [CoffeeTag.Especial],
    },
    {
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      // eslint-disable-next-line prettier/prettier
    price: 9.90,

      quantity: 0,
      image: Irlandes,
      tag: [CoffeeTag.Especial, CoffeeTag.Alcoolico],
    },
  ])

  const [orders, setOrders] = useState<Order[]>([])

  const [paymentOption, setPaymentOption] = useState<PaymentOption>('credit')

  const calculateTotal = () => {
    let total = 0
    orders.forEach((order) => {
      total += order.coffee.price * order.quantityCoffee
    })
    return total
  }

  const handleIncrement = (index: number) => {
    const newCoffeeList = [...coffeeList]
    newCoffeeList[index].quantity++
    setCoffeeList(newCoffeeList)
    setQuantity(quantity + 1)
  }

  const handleDecrement = (index: number) => {
    const newCoffeeList = [...coffeeList]
    if (newCoffeeList[index].quantity > 0) {
      newCoffeeList[index].quantity--
      setCoffeeList(newCoffeeList)
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = (coffee: Coffee) => {
    const index = orders.findIndex((order) => order.coffee.name === coffee.name)

    if (index >= 0) {
      const updatedOrders = [...orders]
      updatedOrders[index].quantityCoffee += coffee.quantity

      setOrders(updatedOrders)
    } else {
      const newOrder = {
        coffee,
        quantityCoffee: coffee.quantity,
      }

      setOrders([...orders, newOrder])
    }

    setQuantity(quantity + coffee.quantity)
    setQuantity(0)
    coffee.quantity = 0
  }
  const handleRemoveFromCart = (index: number) => {
    const updatedOrders = [...orders]
    updatedOrders.splice(index, 1)

    setOrders(updatedOrders)
    setQuantity(quantity - updatedOrders[index].quantityCoffee)
  }

  const contextValue: CoffeeContextType = {
    coffeeList,
    orders,
    total: calculateTotal(),
    quantity,
    address,
    setAddress,
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    handleRemoveFromCart,
    calculateTotal,
    paymentOption,
    setPaymentOption,
  }
  return (
    <CoffeeContext.Provider value={contextValue}>
      {children}
    </CoffeeContext.Provider>
  )
}

export default CartProvider
