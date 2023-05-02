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
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 0;
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

  @media (max-width: 900px) {
    padding: 1rem;
    width: 100%;
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
  @media (max-width: 900px) {
    justify-content: center;
  }
`

export const DivPaymentOption = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding-left: 1.063rem;
  font-size: 16px;
  border-radius: 8px;

  width: 11.167rem;
  height: 3.188rem;
  border: 1px solid
    ${(props) =>
      props.selected ? props.theme.purple : props.theme['base-button']};
  background: ${(props) =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;
  transition: border 0.5s ease;

  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    padding-left: 0.813rem;
    font-size: 12px;

    text-align: start;
    @media (max-width: 900px) {
      text-align: center;
      padding-left: 0;
      justify-content: center;
    }
  }
  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    border: none;
    transition: 0.5s;
  }
  @media (max-width: 900px) {
    width: 5rem;
    height: 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`
