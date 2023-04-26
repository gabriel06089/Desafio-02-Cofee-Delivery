import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  SvgContainer,
  SvgPayment,
  DivPaymentOption,
  PaymentMethodContainer,
  PaymentComponent,
} from './styles'
export function PaymentCard() {
  return (
    <PaymentComponent>
      <SvgContainer>
        <SvgPayment>
          <CurrencyDollar size={24} />
        </SvgPayment>

        <span>
          Pagamento
          <p>
            O pagamento é feito na entrega. escolha a forma que deseja pagar
          </p>
        </span>
      </SvgContainer>
      <PaymentMethodContainer>
        <DivPaymentOption>
          <CreditCard size={16} />
          <span>CARTÃO DE CREDITO</span>
        </DivPaymentOption>
        <DivPaymentOption>
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </DivPaymentOption>
        <DivPaymentOption>
          <Money size={16} />
          <span>DINHEIRO</span>
        </DivPaymentOption>
      </PaymentMethodContainer>
    </PaymentComponent>
  )
}
