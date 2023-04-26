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
export function Sucess() {
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
                Entrega em <span>Rua João daniel Martinelli, 102 </span>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <p>pagamento na entrega</p>
              <p>Cartão de crédito</p>
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
