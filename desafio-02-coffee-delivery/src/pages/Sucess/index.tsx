import {
  DollarDiv,
  HeaderContainer,
  IconContainer,
  IconTextContainer,
  MapDiv,
  SucessBody,
  SucessCard,
  SucessContainer,
  TimeDiv,
} from './style'
import Entregador from '../../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CartContext'
export function Sucess() {
  const { address, paymentOption } = useContext(CoffeeContext)
  return (
    <SucessBody>
      <HeaderContainer>
        <span>uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </HeaderContainer>
      <SucessContainer>
        <SucessCard>
          <IconContainer>
            <MapDiv>
              <MapPin size={16} weight="fill" />
            </MapDiv>
            <IconTextContainer>
              <p>
                Entrega em
                <span>
                  {' '}
                  {address.street}, {address.number}
                </span>
              </p>
              <span>
                {address.neighborhood} - {address.city}, {address.state}
              </span>
            </IconTextContainer>
          </IconContainer>
          <IconContainer>
            <DollarDiv>
              <Timer size={16} weight="fill" />
            </DollarDiv>
            <IconTextContainer>
              <p>Previsão de entrega</p>
              <p>20 - 30 min</p>
            </IconTextContainer>
          </IconContainer>
          <IconContainer>
            <TimeDiv>
              <CurrencyDollar size={16} />
            </TimeDiv>
            <IconTextContainer>
              <p>Pagamento na entrega</p>
              {paymentOption === 'credit' ? (
                <p>Cartão de crédito</p>
              ) : paymentOption === 'debit' ? (
                <p>Cartão de débito</p>
              ) : (
                <p>Prepare o dinheiro, nosso entregador está a caminho!</p>
              )}
            </IconTextContainer>
          </IconContainer>
        </SucessCard>
        <img
          src={Entregador}
          alt="Homem de camisa amarela e calça verde em uma mobilete roxa"
        />
      </SucessContainer>
    </SucessBody>
  )
}
