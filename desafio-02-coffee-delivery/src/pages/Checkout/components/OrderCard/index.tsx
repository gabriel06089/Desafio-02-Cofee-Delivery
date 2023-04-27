import { Minus, Plus, Trash } from 'phosphor-react'
import {
  GreybarDiv,
  PaymentText,
  PaycheckPadding,
  TotalDiv,
  ConfirmButton,
  ConfirmDiv,
  OrderContainer,
  ColumContainer,
  DivCounter,
  DivRemove,
  GreyBar,
  PaymentCheck,
  RowContainerBase,
  NavSucess,
} from './styles'
import Tradicional from '../../../../assets/Tradicional.svg'
import Latte from '../../../../assets/ImageLatte.svg'
export function OrderCard() {
  return (
    <OrderContainer>
      <PaycheckPadding>
        <PaymentCheck>
          <img src={Tradicional} alt="" />
          <ColumContainer>
            <PaymentText>
              <span>Expresso Tradicional</span>
            </PaymentText>
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
        <GreybarDiv>
          <GreyBar />
        </GreybarDiv>
        <PaymentCheck>
          <img src={Latte} alt="" />
          <ColumContainer>
            <PaymentText>
              <span>Latte</span>
            </PaymentText>
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
          <span>19,80</span>
        </PaymentCheck>
        <GreybarDiv>
          <GreyBar />
        </GreybarDiv>

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
        <NavSucess to="/sucess" title="Confirmação de pedido">
          <ConfirmDiv>
            <ConfirmButton>
              <span>CONFIRMAR PEDIDO</span>
            </ConfirmButton>
          </ConfirmDiv>
        </NavSucess>
      </PaycheckPadding>
    </OrderContainer>
  )
}
