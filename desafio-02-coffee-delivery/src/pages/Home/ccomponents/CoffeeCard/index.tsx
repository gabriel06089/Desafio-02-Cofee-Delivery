import {
  BackgroundDivCoffees,
  CartButton,
  CheckoutContainer,
  CoffeeGrid,
  DecrementButton,
  DivCoffees,
  DivCounter,
  DivPrice,
  IncrementButton,
  RowContainer,
  TagContainer,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CartContext'

export function CoffeeCard() {
  const { coffeeList, handleAddToCart, handleIncrement, handleDecrement } =
    useContext(CoffeeContext)
  return (
    <DivCoffees>
      <h1>Nossos cafés</h1>

      <CoffeeGrid>
        {coffeeList.map((coffee, index) => (
          <BackgroundDivCoffees key={index}>
            <img src={coffee.image} alt="" />
            <RowContainer>
              {coffee.tag?.map((tag, tagIndex) => (
                <TagContainer key={tagIndex}>{tag}</TagContainer>
              ))}
            </RowContainer>
            <h1>{coffee.name}</h1>
            <span>{coffee.description}</span>
            <CheckoutContainer>
              <DivPrice>
                <span>R$</span>
                <span>{coffee.price.toFixed(2)}</span>
              </DivPrice>
              <DivCounter>
                <IncrementButton onClick={() => handleIncrement(index)}>
                  <Minus />
                </IncrementButton>
                {coffee.quantity}
                <DecrementButton onClick={() => handleDecrement(index)}>
                  <Plus />
                </DecrementButton>
              </DivCounter>
              <CartButton onClick={() => handleAddToCart(coffee)}>
                <ShoppingCart size={24} weight="fill" />
              </CartButton>
            </CheckoutContainer>
          </BackgroundDivCoffees>
        ))}
      </CoffeeGrid>
    </DivCoffees>
  )
}
