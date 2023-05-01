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

  button {
    background-color: transparent;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 16px;
    margin-right: 16px;
    padding: 8px;
    transition: background-color 0.2s ease;
  }

  button.selected {
    background-color: #333;
    color: #fff;
  }
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

export const DivPaymentOption = styled.div<{ selected: boolean }>`
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
  border: 1px solid
    ${(props) =>
      props.selected ? props.theme.purple : props.theme['base-button']};
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;
  transition: border 0.5s ease;

  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    padding-left: 0.813rem;
    font-size: 12px;
    line-height: 160%;
    text-align: start;
  }
  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    border: none;
    transition: 0.5s;
  }
`
