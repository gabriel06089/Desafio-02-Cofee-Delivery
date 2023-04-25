import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
  flex-grow: 6;
`

export const RowContainerBody = styled.div`
  display: flex;
  padding: 0rem 10rem;
  gap: 2rem;
`

export const RowContainerBase = styled.div`
  display: flex;

  gap: 0.5rem;
`

export const PaymentCheck = styled(RowContainerBase)`
  padding: 1rem;
  img {
    width: 64px;
    height: 64px;
  }
  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }
`

export const ColumContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const PaycheckPadding = styled(ColumContainer)`
  padding: 1.5rem;
`
export const OrderContainer = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 2px solid ${(props) => props.theme['base-card']};

  gap: 2rem;
`

export const InputComponent = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  input {
    background-color: ${(props) => props.theme['base-input']};
    font-size: 16px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 8px;
    outline: none;

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
    &:focus {
      border-color: blue;
    }
  }
`
export const DivInput = styled.div`
  padding: 1rem 0;
  input {
    width: 100%;
  }
`
export const DivInputChildren = styled.div`
  gap: 1rem;
  display: flex;
  input:nth-child(1) {
    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    font-size: 16px;
  }
  input:nth-child(2) {
    width: 100%;
    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    font-size: 16px;
    padding: 10px;
  }
`
export const DivInputChildren2 = styled.div`
  display: flex;
  padding: 1.5rem 0;
  gap: 1rem;
  input:nth-child(1) {
    background-color: ${(props) => props.theme['base-input']};
    font-size: 16px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme['base-button']};
  }
  input:nth-child(2) {
    width: 80%;
    background-color: ${(props) => props.theme['base-input']};
    font-size: 16px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme['base-button']};
  }
  input:nth-child(3) {
    width: 20%;
    background-color: ${(props) => props.theme['base-input']};
    font-size: 16px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme['base-button']};
  }
`

export const PaymentComponent = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 4.5rem;
  height: 2rem;
  background: ${(props) => props.theme['base-button']};
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const DivRemove = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  gap: 0.25rem;
  border-radius: 8px;
  padding: 0.2rem;
  width: 5.688rem;
  height: 2rem;

  background: ${(props) => props.theme['base-button']};
  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    font-weight: 400;
    font-size: 12px;
  }
`
export const GreyBar = styled.div`
  margin-top: 0.725rem;
  margin-bottom: 0.725rem;
  background-color: ${(props) => props.theme['base-button']};
  height: 2px;
  width: 100%;
`
