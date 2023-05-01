import {
  CheckoutContainer,
  RowContainerBody,
  HeaderText,
  HeaderDiv,
  AnimationInputCard,
  AnimationPaymentCard,
  AnimationOrderCard,
  HeaderText2,
} from './styles'

import { InputCard } from './components/InputCard'
import { PaymentCard } from './components/Paymentcard'
import { OrderCard } from './components/OrderCard'
import { CoffeeContext } from '../../contexts/CartContext'
import { useContext } from 'react'
export function Checkout() {
  const { orders, address } = useContext(CoffeeContext)
  const totalQuantity = orders.reduce(
    (acc, order) => acc + order.quantityCoffee,
    0,
  )
  return (
    <RowContainerBody>
      <CheckoutContainer>
        <HeaderText2>Complete seu pedido</HeaderText2>
        <AnimationInputCard>
          <InputCard />
        </AnimationInputCard>
        <AnimationPaymentCard>
          <PaymentCard />
        </AnimationPaymentCard>
      </CheckoutContainer>
      <HeaderDiv>
        {totalQuantity > 0 && address.city && address.state && (
          <AnimationOrderCard>
            <HeaderText>Cafés Selecionados</HeaderText>
            <OrderCard />
          </AnimationOrderCard>
        )}
      </HeaderDiv>
    </RowContainerBody>
  )
}
