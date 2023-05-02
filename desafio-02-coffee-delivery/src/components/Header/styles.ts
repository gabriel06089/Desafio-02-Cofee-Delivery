import styled from 'styled-components'

export const DivCoffees = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2.5rem;
  margin-top: 5rem;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 1rem;
  }
  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }
`

export const BaseDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  padding: 0.75rem;
  width: 100%;
  @media (max-width: 900px) {
    padding: 0.7rem;
  }
`

export const CartButton = styled(BaseDiv)`
  background: ${(props) => props.theme['yellow-light']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CityButton = styled(BaseDiv)`
  background: ${(props) => props.theme['purple-light']};
  span {
    color: ${(props) => props.theme['purple-dark']};
  }
  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const QuantityCircle = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`
