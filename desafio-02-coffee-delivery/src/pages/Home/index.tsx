import {
  BoxDiv,
  CartDiv,
  CoffeeDiv,
  DescContainer,
  GridContainer,
  IconTextContainer,
  IconTextContainer2,
  ImgContainer,
  TimerDiv,
} from './styles'
import CoffeePic from '../../assets/CoffeePic.svg'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from './ccomponents/CoffeeCard'

export function Home() {
  return (
    <>
      <ImgContainer>
        <DescContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivety você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <GridContainer>
            <IconTextContainer>
              <CartDiv>
                <ShoppingCart size={20} weight="fill" />
              </CartDiv>
              <span> Compra simples e segura</span>
            </IconTextContainer>
            <IconTextContainer2>
              <BoxDiv>
                <Package size={20} weight="fill" />
              </BoxDiv>
              <span> Embalagem mantém o café intacto</span>
            </IconTextContainer2>
            <IconTextContainer>
              <TimerDiv>
                <Timer size={20} weight="fill" />
              </TimerDiv>
              <span> Entrega rápida e rastreada</span>
            </IconTextContainer>
            <IconTextContainer2>
              <CoffeeDiv>
                <Coffee size={20} weight="fill" />
              </CoffeeDiv>
              <span> O café chega fresquinho até você</span>
            </IconTextContainer2>
          </GridContainer>
        </DescContainer>
        <img src={CoffeePic} alt="" />
      </ImgContainer>
      <CoffeeCard />
    </>
  )
}
