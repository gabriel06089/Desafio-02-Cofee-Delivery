import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  SvgContainer,
  SvgPayment,
  DivPaymentOption,
  PaymentMethodContainer,
  PaymentComponent,
} from './styles'
import { CoffeeContext } from '../../../../contexts/CartContext'
import { useContext, useState } from 'react'
export function PaymentCard() {
  const { paymentOption, setPaymentOption } = useContext(CoffeeContext)
  const [selectedOption, setSelectedOption] = useState(paymentOption)

  const handleCreditCardClick = () => {
    setPaymentOption('credit')
  }

  const handleDebitCardClick = () => {
    setPaymentOption('debit')
  }

  const handleCashClick = () => {
    setPaymentOption('cash')
  }

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
        <DivPaymentOption
          selected={paymentOption === 'credit'}
          onClick={handleCreditCardClick}
        >
          <CreditCard size={16} />

          <span>CARTÃO DE CREDITO</span>
        </DivPaymentOption>
        <DivPaymentOption
          selected={paymentOption === 'debit'}
          onClick={handleDebitCardClick}
        >
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </DivPaymentOption>
        <DivPaymentOption
          selected={paymentOption === 'cash'}
          onClick={handleCashClick}
        >
          <Money size={16} />
          <span>DINHEIRO</span>
        </DivPaymentOption>
      </PaymentMethodContainer>
    </PaymentComponent>
  )
}
