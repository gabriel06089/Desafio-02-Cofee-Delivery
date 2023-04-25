import {
  CheckoutContainer,
  DivInput,
  DivInputChildren,
  DivInputChildren2,
  InputComponent,
  RowContainerBase,
  PaymentComponent,
  OrderContainer,
  ColumContainer,
  DivCounter,
  DivRemove,
  GreyBar,
  PaymentCheck,
  RowContainerBody,
  PaycheckPadding,
  DivLocation,
  TotalDiv,
  ConfirmButton,
  ConfirmDiv,
  DivInput2,
  SvgContainer,
  SvgPayment,
  DivPaymentOption,
  PaymentMethodContainer,
} from './styles'
import Tradicional from '../../assets/Tradicional.svg'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
export function Checkout() {
  return (
    <RowContainerBody>
      <CheckoutContainer>
        <InputComponent>
          <DivLocation>
            <SvgContainer>
              <MapPinLine size={24} />
              <span>
                Endereço de entrega
                <p>Informe o endereço onde deseja recerber o pedido</p>
              </span>
            </SvgContainer>

            <DivInput>
              <input type="text" placeholder="CEP" />
            </DivInput>
          </DivLocation>

          <DivInput2>
            <input type="text" placeholder="Rua" />
          </DivInput2>

          <DivInputChildren>
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </DivInputChildren>
          <DivInputChildren2>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </DivInputChildren2>
        </InputComponent>

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
      </CheckoutContainer>
      <OrderContainer>
        <PaycheckPadding>
          <PaymentCheck>
            <img src={Tradicional} alt="" />
            <ColumContainer>
              Expresso Tradicional
              <RowContainerBase>
                <DivCounter>
                  <Minus size={14} weight="bold" />1
                  <Plus size={14} weight="bold" />
                </DivCounter>
                <DivRemove>
                  <Trash size={16} /> <span>REMOVER</span>
                </DivRemove>
              </RowContainerBase>
            </ColumContainer>
            <span>R$</span>
            <span>9,90</span>
          </PaymentCheck>
          <GreyBar />
          <PaymentCheck>
            <img src={Tradicional} alt="" />
            <ColumContainer>
              Expresso Tradicional
              <RowContainerBase>
                <DivCounter>
                  <Minus size={14} weight="bold" />1
                  <Plus size={14} weight="bold" />
                </DivCounter>
                <DivRemove>
                  <Trash size={16} /> <span>REMOVER</span>
                </DivRemove>
              </RowContainerBase>
            </ColumContainer>
            <span>R$</span>
            <span>9,90</span>
          </PaymentCheck>
          <GreyBar />
        </PaycheckPadding>
        <TotalDiv>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </TotalDiv>
        <TotalDiv>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </TotalDiv>
        <TotalDiv>
          <h1>Total</h1>
          <h1>R$ 33,20</h1>
        </TotalDiv>

        <ConfirmDiv>
          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </ConfirmDiv>
      </OrderContainer>
    </RowContainerBody>
  )
}
