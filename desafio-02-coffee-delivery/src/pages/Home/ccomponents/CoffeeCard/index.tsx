import {
  BackgroundDivCoffees,
  CartButton,
  CheckoutContainer,
  CoffeeGrid,
  DivCoffees,
  DivCounter,
  DivPrice,
  RowContainer,
  TagContainer,
} from './styles'

import Tradicional from '../../../../assets/Tradicional.svg'
import Americano from '../../../../assets/ImageAmericano.svg'
import Cremoso from '../../../../assets/ImageExpressoCremoso.svg'
import Gelado from '../../../../assets/ImageCafegelado.svg'
import Leite from '../../../../assets/ImageCafeComLeite.svg'
import Latte from '../../../../assets/ImageLatte.svg'
import Capuccino from '../../../../assets/ImageCapuccino.svg'
import Macchiato from '../../../../assets/ImageMacchiato.svg'
import Maccino from '../../../../assets/ImageMochaccino.svg'
import Chocolate from '../../../../assets/ImageChocolateQuente.svg'
import Cubano from '../../../../assets/ImageCubano.svg'
import Havaiano from '../../../../assets/ImageHavaiano.svg'
import Arabe from '../../../../assets/ImageArabe.svg'
import Irlandes from '../../../../assets/ImageIrlandes.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <DivCoffees>
      <h1>Nossos cafés</h1>

      <CoffeeGrid>
        <BackgroundDivCoffees>
          <img src={Tradicional} alt="" />
          <TagContainer>TRADICIONAL</TagContainer>
          <h1>Expresso Tradicional</h1>
          <span>O tradicional café feito com água quente e grãos moídos</span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Americano} alt="" />
          <TagContainer>TRADICIONAL</TagContainer>
          <h1>Expresso Americano</h1>
          <span>Expresso diluído, menos intenso que o tradicional</span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Cremoso} alt="" />
          <TagContainer>TRADICIONAL</TagContainer>
          <h1>Expresso Cremoso</h1>
          <span>Café expresso tradicional com espuma cremosa</span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Gelado} alt="" />
          <RowContainer>
            <TagContainer>TRADICIONAL</TagContainer>
            <TagContainer>GELADO</TagContainer>
          </RowContainer>
          <h1>Expresso Gelado</h1>
          <span>Bebida preparada com café expresso e cubos de gelo</span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Leite} alt="" />
          <RowContainer>
            <TagContainer>TRADICIONAL</TagContainer>
            <TagContainer>COM LEITE</TagContainer>
          </RowContainer>
          <h1>Café com Leite</h1>
          <span>Meio a meio de expresso com leite vaporizado</span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Latte} alt="" />
          <RowContainer>
            <TagContainer>TRADICIONAL</TagContainer>
            <TagContainer>COM LEITE</TagContainer>
          </RowContainer>
          <h1>Latte</h1>
          <span>
            Uma dose de café expresso com o dobro de leite e espuma cremosa
          </span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Capuccino} alt="" />
          <RowContainer>
            <TagContainer>TRADICIONAL</TagContainer>
            <TagContainer>COM LEITE</TagContainer>
          </RowContainer>
          <h1>Capuccino</h1>
          <span>
            Bebida com canela feita de doses iguais de café, leite e espuma
          </span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Macchiato} alt="" />
          <RowContainer>
            <TagContainer>TRADICIONAL</TagContainer>
            <TagContainer>COM LEITE</TagContainer>
          </RowContainer>
          <h1>Macchiato</h1>
          <span>
            Café expresso misturado com um pouco de leite quente e espuma
          </span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Maccino} alt="" />
          <RowContainer>
            <TagContainer>TRADICIONAL</TagContainer>
            <TagContainer>COM LEITE</TagContainer>
          </RowContainer>
          <h1>Mocaccino</h1>
          <span>
            Café expresso com calda de chocolate, pouco leite e espuma
          </span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Chocolate} alt="" />
          <RowContainer>
            <TagContainer>ESPECIAL</TagContainer>
            <TagContainer>COM LEITE</TagContainer>
          </RowContainer>
          <h1>Chocolate Quente</h1>
          <span>
            Bebida feita com chocolate dissolvido no leite quente e café
          </span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Cubano} alt="" />
          <RowContainer>
            <TagContainer>ESPECIAL</TagContainer>
            <TagContainer>ALCOÓLICO</TagContainer>
            <TagContainer>GELADO</TagContainer>
          </RowContainer>
          <h1>Cubano</h1>
          <span>
            Drink gelado de café expresso com rum, creme de leite ehortelã
          </span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Havaiano} alt="" />
          <TagContainer>ESPECIAL</TagContainer>
          <h1>Havaiano</h1>
          <span>Bebida adocicada preparada com café e leite de coco</span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Arabe} alt="" />
          <TagContainer>ESPECIAL</TagContainer>
          <h1>Árabe</h1>
          <span>Bebida preparada com grãos de café árabe e especiarias</span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
        <BackgroundDivCoffees>
          <img src={Irlandes} alt="" />
          <RowContainer>
            <TagContainer>ESPECIAL</TagContainer>
            <TagContainer>ALCOÓLICO</TagContainer>
          </RowContainer>
          <h1>Irlandês</h1>
          <span>
            Bebida a base de café, uísque irlandês, açúcar e chantilly
          </span>
          <CheckoutContainer>
            <DivPrice>
              <span>R$</span>
              <span>9,99</span>
            </DivPrice>
            <DivCounter>
              <Minus />1<Plus />
            </DivCounter>
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </CheckoutContainer>
        </BackgroundDivCoffees>
      </CoffeeGrid>
    </DivCoffees>
  )
}
