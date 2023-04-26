import styled from 'styled-components'
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
