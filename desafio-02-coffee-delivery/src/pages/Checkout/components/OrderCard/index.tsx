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

import { CoffeeContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

export function OrderCard() {
  const { orders, total, handleRemoveFromCart } = useContext(CoffeeContext)
  return (
    <OrderContainer>
      <PaycheckPadding>
        {orders.map((order, index) => (
          <>
            <PaymentCheck>
              <img src={order.coffee.image} alt="" />
              <ColumContainer>
                <PaymentText>
                  <span>{order.coffee.name}</span>
                </PaymentText>
                <RowContainerBase>
                  <DivCounter>
                    <Minus size={14} weight="bold" />
                    {order.quantityCoffee}
                    <Plus size={14} weight="bold" />
                  </DivCounter>
                  <DivRemove onClick={() => handleRemoveFromCart(index)}>
                    <Trash size={16} /> <span>REMOVER</span>
                  </DivRemove>
                </RowContainerBase>
              </ColumContainer>
              <span>R$</span>
              <span>{order.coffee.price}</span>
            </PaymentCheck>

            <GreybarDiv>
              <GreyBar />
            </GreybarDiv>
          </>
        ))}

        <TotalDiv>
          <span>Total de itens</span>
          <span>R$ {total.toFixed(2)}</span>
        </TotalDiv>

        {total === 0 && (
          <TotalDiv>
            <span>Taxa de Entrega</span>
            <span>R$ {(0).toFixed(2)}</span>
          </TotalDiv>
        )}
        {total > 0 && (
          <TotalDiv>
            <span>Taxa de Entrega</span>
            <span>R$ {(3.5).toFixed(2)}</span>
          </TotalDiv>
        )}

        {total === 0 && (
          <TotalDiv>
            <h1>Total</h1>
            <h1>R$ 0,00</h1>
          </TotalDiv>
        )}
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
