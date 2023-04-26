import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`
export const HeaderText = styled.div`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
`

export const RowContainerBody = styled.div`
  display: flex;
  padding: 0rem 10rem;
  padding-bottom: 2rem;
  gap: 2rem;
`

export const RowContainerBase = styled.div`
  display: flex;

  gap: 0.5rem;
`

export const PaymentCheck = styled(RowContainerBase)`
  margin: 2rem;

  img {
    width: 64px;
    height: 64px;
  }

  span:nth-child(3) {
    padding-left: 1rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }
  span:nth-child(4) {
    padding-left: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }
`
export const PaymentText = styled.div`
  span {
    margin-left: 0.5rem;
  }
`

export const ColumContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PaycheckPadding = styled(ColumContainer)`
  padding: 0rem;
`
export const HeaderDiv = styled(ColumContainer)`
  gap: 0.8rem;
`
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 2px solid ${(props) => props.theme['base-card']};
`

export const InputComponent = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
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
  input {
    width: 0 0 40%;
  }
`
export const DivInput2 = styled.div`
  padding: 1rem 0;
  input {
    width: 100%;
  }
`
export const DivInputChildren = styled.div`
  gap: 1rem;
  display: flex;
  input:nth-child(1) {
    flex: 0 0 40%;
    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    font-size: 16px;
  }
  input:nth-child(2) {
    flex: 1 1 auto;
    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    font-size: 16px;
  }
`
export const DivInputChildren2 = styled.div`
  display: flex;
  padding: 1rem 0;
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

  margin-left: 0.5rem;
  margin-top: 0.5rem;
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
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  font-size: 16px;
  line-height: 130%;

  gap: 0.25rem;
  border-radius: 8px;

  width: 6.9rem;
  height: 2rem;

  background: ${(props) => props.theme['base-button']};
  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    font-size: 12px;
  }
`
export const GreyBar = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  height: 2px;

  width: 80%;
`
export const GreybarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DivLocation = styled.div`
  display: flex;
  flex-direction: column;
`
export const SvgContainer = styled.div`
  display: flex;
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
  span {
    font-size: 16px;
    line-height: 130%;
    padding-left: 0.5rem;
  }
  p {
    font-size: 14px;
    line-height: 130%;
    padding-bottom: 2rem;
  }
`
export const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  span {
    padding-top: 1rem;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  h1 {
    padding-top: 1rem;

    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ConfirmButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 14px;
  line-height: 160%;

  gap: 0.25rem;
  border-radius: 8px;

  width: 90%;
  height: 2.875rem;

  background-color: ${(props) => props.theme.yellow};

  margin-top: 0;
  padding: 0.25rem 0.4rem;

  color: ${(props) => props.theme.white};
`
export const ConfirmDiv = styled.div`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PaymentComponent = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`
export const SvgPayment = styled.div`
  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const PaymentMethodContainer = styled.div`
  display: flex;

  gap: 1rem;
`

export const DivPaymentOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding-left: 1.063rem;
  font-size: 16px;
  line-height: 130%;

  border-radius: 8px;

  width: 11.167rem;
  height: 3.188rem;

  background: ${(props) => props.theme['base-button']};
  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    padding-left: 0.813rem;
    font-size: 12px;
    line-height: 160%;
    text-align: start;
  }
`
