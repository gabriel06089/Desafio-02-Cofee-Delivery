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
  IncrementButton,
  DecrementButton,
  ValorText,
} from './styles'

import { CoffeeContext } from '../../../../contexts/CartContext'
import { useContext, useState } from 'react'

export function OrderCard() {
  const {
    orders,
    total,
    handleRemoveFromCart,
    handleIncrement,
    handleDecrement,
    address,
    setAddress,
  } = useContext(CoffeeContext)

  const totalQuantity = orders.reduce(
    (acc, order) => acc + order.quantityCoffee,
    0,
  )
  const [newOrders, setNewOrders] = useState(orders)

  const handleAdd = (index: number) => {
    const updatedOrders = [...newOrders]
    updatedOrders[index].quantityCoffee++
    setNewOrders(updatedOrders)
    handleIncrement(index)
  }

  const handleSubtract = (index: number) => {
    if (newOrders[index].quantityCoffee === 1) {
      handleRemoveFromCart(index)
    } else {
      const updatedOrders = [...newOrders]
      updatedOrders[index].quantityCoffee--
      setNewOrders(updatedOrders)
      handleDecrement(index)
    }
  }
  return (
    <>
      {totalQuantity > 0 && address.city && address.state && (
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
                        <DecrementButton>
                          <Minus
                            size={14}
                            weight="bold"
                            onClick={() => handleSubtract(index)}
                          />
                        </DecrementButton>
                        {newOrders[index].quantityCoffee}
                        <IncrementButton>
                          <Plus
                            size={14}
                            weight="bold"
                            onClick={() => handleAdd(index)}
                          />
                        </IncrementButton>
                      </DivCounter>
                      <DivRemove onClick={() => handleRemoveFromCart(index)}>
                        <Trash size={16} /> <span>REMOVER</span>
                      </DivRemove>
                    </RowContainerBase>
                  </ColumContainer>
                  <ValorText>
                    <span>R$ </span>
                    <span>{order.coffee.price}</span>
                  </ValorText>
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
            {total > 0 && (
              <TotalDiv>
                <h1>Total</h1>
                <h1>R$ {total.toFixed(2)}</h1>
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
      )}
    </>
  )
}
