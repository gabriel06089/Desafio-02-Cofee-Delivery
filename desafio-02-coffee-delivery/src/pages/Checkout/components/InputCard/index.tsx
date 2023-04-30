import {
  DivInput,
  DivInput2,
  DivInputChildren,
  DivInputChildren2,
  InputComponent,
  DivLocation,
  SvgContainer,
  StyledInputMask,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CartContext'

export function InputCard() {
  const { address, setAddress } = useContext(CoffeeContext)

  const handleCEPChange = async (cep: string) => {
    if (cep.length === 9) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        setAddress({
          ...address,
          street: data.logradouro,
          complement: data.complemento,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setAddress({ ...address, [name]: value })
  }
  const [options, setOptions] = useState([
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MT',
    'PA',
    'PB',
    'PE',
    'PI',
    'PR',
    'RJ',
    'RN',
    'RO',
    'RR',
    'RS',
    'SC',
    'SE',
    'SP',
    'TO',
  ])

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
          <StyledInputMask
            mask={'99999-999'}
            maskChar=" "
            maskPlaceholder={null}
            type="text"
            placeholder="CEP"
            name="cep"
            id="cep"
            value={address.cep}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleInputChange(event)
            }}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (event.key === 'Enter' || event.key === 'Tab') {
                handleCEPChange(event.currentTarget.value)
              }
            }}
          />
        </DivInput>
      </DivLocation>

      <DivInput2>
        <StyledInputMask
          mask="**************************************************"
          maskChar=" "
          placeholder="Rua"
          name="street"
          value={address.street}
          onChange={handleInputChange}
        />
      </DivInput2>

      <DivInputChildren>
        <StyledInputMask
          mask="999999"
          maskChar=" "
          placeholder="Número"
          name="number"
          value={address.number}
          onChange={handleInputChange}
        />
        <StyledInputMask
          mask="**************************************************"
          maskChar=" "
          placeholder="Complemento"
          name="complement"
          value={address.complement}
          onChange={handleInputChange}
        />
      </DivInputChildren>
      <DivInputChildren2>
        <StyledInputMask
          maskChar=" "
          mask="**************************************************"
          placeholder="Bairro"
          name="neighborhood"
          value={address.neighborhood}
          onChange={handleInputChange}
        />
        <StyledInputMask
          maskChar=" "
          mask="***************************************************************"
          placeholder="Cidade"
          name="city"
          value={address.city}
          onChange={handleInputChange}
          pattern="[A-Za-z ]+"
        />
        <input
          type="text"
          placeholder="UF"
          name="state"
          value={address.state}
          onChange={handleInputChange}
          id="state-input"
          list="state-options"
        />
        <datalist id="state-options">
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </DivInputChildren2>
      <div>
        <p>Cep:{address.cep}</p>
        <p>
          Rua: {address.street} Numero: {address.number}
        </p>
        <p>Complemento: {address.complement}</p>
        <p>Bairro:{address.neighborhood}</p>
        <p>
          Cidade: {address.city} - Estado:{address.state}
        </p>
        <p>{address.cep}</p>
      </div>
    </InputComponent>
  )
}
