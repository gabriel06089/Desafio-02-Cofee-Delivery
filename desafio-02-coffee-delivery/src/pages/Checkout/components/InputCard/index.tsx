import {
  DivInput,
  DivInput2,
  DivInputChildren,
  DivInputChildren2,
  InputComponent,
  DivLocation,
  SvgContainer,
} from './styles'
import { MapPinLine } from 'phosphor-react'
export function InputCard() {
  return (
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
  )
}
