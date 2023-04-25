import styled from 'styled-components'

export const DivCoffees = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 10rem;

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
export const BackgroundDivCoffees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 2px solid ${(props) => props.theme['base-card']};
  height: 100%;
  width: 100%;

  img {
    transform: translateX(-0%) translateY(-20%);
    width: 7.5rem;
    height: 7.5rem;
  }
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    padding-top: 1rem;
  }
  span {
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`
export const TagContainer = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 0;
  padding: 0.25rem 0.4rem;
  font-weight: 700;
  font-size: 10px;

  color: ${(props) => props.theme['yellow-dark']};
`
export const DivPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  padding-right: 2rem;
  gap: 0.25rem;
  span:nth-child(1) {
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme['base-text']};

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
  span:nth-child(2) {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    text-align: right;
  }
`
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 1.5rem 0rem;
`
export const DivCounter = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  gap: 0.5rem;
  border-radius: 8px;
  padding: 0.2rem;
  width: 100%;
  background: ${(props) => props.theme['base-button']};
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 0.2rem;
  width: 100%;
  background: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.white};
  }
`
