import InputMask from 'react-input-mask'
import styled, { keyframes } from 'styled-components'

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
    color: ${(props) => props.theme['base-label']};
    ::placeholder:not(:empty) {
      opacity: 0;
    }
    &:focus {
      border-color: ${(props) => props.theme['base-hover']};
    }
  }
`
export const StyledInputMask = styled(InputMask)`
  color: ${(props) => props.theme['base-label']};
  color: ${(props) => props.theme['base-label']};
  ::placeholder:not(:empty) {
    opacity: 0;
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
    flex: 0 0 20%;
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
