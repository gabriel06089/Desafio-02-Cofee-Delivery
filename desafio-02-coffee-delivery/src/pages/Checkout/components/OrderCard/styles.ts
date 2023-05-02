import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 2px solid ${(props) => props.theme['base-card']};
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

export const IncrementButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    svg {
      color: ${(props) => props.theme['base-title']};
    }
  }
`
export const DecrementButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    svg {
      color: ${(props) => props.theme['base-title']};
    }
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
  padding: 0px 8px;
  gap: 0.25rem;
  border-radius: 6px;

  width: 91px;
  height: 32px;

  background: ${(props) => props.theme['base-button']};

  transition: 0.5s;
  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    font-size: 12px;
  }
  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
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
    padding-bottom: 1rem;

    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ConfirmButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  border-radius: 8px;

  width: 92%;
  height: 2.875rem;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  margin-top: 0;
  padding: 0.25rem 0.4rem;
  transition: 0.5s;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    text-decoration: none;
  }
  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
export const ConfirmDiv = styled.div`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RowContainerBase = styled.div`
  display: flex;

  gap: 0.5rem;
  @media (max-width: 900px) {
    gap: 0.5rem;
  }
`
export const PaymentCheck = styled(RowContainerBase)`
  margin: 2rem;

  img {
    width: 64px;
    height: 64px;
    @media (max-width: 900px) {
      width: 54px;
      height: 54px;
    }
  }

  @media (max-width: 900px) {
    padding: 0rem;
    margin: auto;
    padding: 1.5rem 0rem;
  }
`
export const PaymentText = styled.div`
  display: flex;
  justify-content: space-between;

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
export const NavSucess = styled(NavLink)`
  text-decoration: none;
`
export const ValorText = styled.div`
  display: flex;
  align-items: flex-start;
  span:nth-child(1) {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }
  span:nth-child(2) {
    padding-left: 1rem;

    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    @media (max-width: 900px) {
      padding-left: 0.3rem;
    }
  }
`
