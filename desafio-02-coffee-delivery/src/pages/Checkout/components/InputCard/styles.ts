import InputMask from 'react-input-mask'
import styled from 'styled-components'

export const InputComponent = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transition: opacity 0.5s ease;
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
      border-color: ${(props) => props.theme['yellow-dark']};
    }
  }
  @media (max-width: 900px) {
    padding: 1rem;
  }
`
export const StyledInputMask = styled(InputMask)`
  color: ${(props) => props.theme['base-label']};

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`
export const DivInput = styled.div`
  transition: opacity 0.5s ease;
  input {
    width: 0 0 40%;
    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
    @media (max-width: 900px) {
      width: 100%;
    }
  }
`
export const DivInput2 = styled.div`
  transition: opacity 0.5s ease;
  padding: 1rem 0;
  input {
    width: 100%;
    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const DivInputChildren = styled.div`
  transition: opacity 0.5s ease;
  gap: 1rem;
  display: flex;
  input:nth-child(1) {
    flex: 0 0 20%;
    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    font-size: 16px;
    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
    @media (max-width: 900px) {
      flex: auto;
      width: 50%;
    }
  }
  input:nth-child(2) {
    flex: 1 1 auto;
    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    font-size: 16px;
    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
    @media (max-width: 900px) {
      width: 50%;
      flex: auto;
    }
  }
`
export const DivInputChildren2 = styled.div`
  transition: opacity 0.5s ease;
  display: flex;
  padding: 1rem 0;
  gap: 1rem;
  input:nth-child(1) {
    background-color: ${(props) => props.theme['base-input']};
    font-size: 16px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme['base-button']};
    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
    @media (max-width: 900px) {
      width: 40%;
    }
  }
  input:nth-child(2) {
    width: 80%;
    background-color: ${(props) => props.theme['base-input']};
    font-size: 16px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme['base-button']};
    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
    @media (max-width: 900px) {
      width: 40%;
    }
  }
  input:nth-child(3) {
    width: 20%;
    background-color: ${(props) => props.theme['base-input']};
    font-size: 16px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme['base-button']};
    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
    @media (max-width: 900px) {
      width: 25%;
    }
  }
  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;

    padding: 0;
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
