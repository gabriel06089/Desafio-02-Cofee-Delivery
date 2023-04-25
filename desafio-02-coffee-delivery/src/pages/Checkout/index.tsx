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
} from './styles'
import Tradicional from '../../assets/Tradicional.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
export function Checkout() {
  return (
    <RowContainerBody>
      <CheckoutContainer>
        <InputComponent>
          <input type="text" placeholder="CEP" />
          <DivInput>
            <input type="text" placeholder="Rua" />
          </DivInput>

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

        <PaymentComponent> oi</PaymentComponent>
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
            <span>R$ 9,90</span>
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
            <span>R$ 9,90</span>
          </PaymentCheck>
          <GreyBar />
        </PaycheckPadding>

        <span>qeq</span>
        <span>qeq</span>
        <span>qeq</span>
        <span>qeq</span>
      </OrderContainer>
    </RowContainerBody>
  )
}
