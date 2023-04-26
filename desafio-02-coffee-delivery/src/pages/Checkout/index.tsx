import {
  CheckoutContainer,
  RowContainerBody,
  HeaderText,
  HeaderDiv,
} from './styles'

import { InputCard } from './components/InputCard'
import { PaymentCard } from './components/Paymentcard'
import { OrderCard } from './components/OrderCard'
export function Checkout() {
  return (
    <RowContainerBody>
      <CheckoutContainer>
        <HeaderText>Complete seu pedido</HeaderText>
        <InputCard />
        <PaymentCard />
      </CheckoutContainer>
      <HeaderDiv>
        <HeaderText>Cafés Selecionados</HeaderText>
        <OrderCard />
      </HeaderDiv>
    </RowContainerBody>
  )
}
