import styled, { keyframes } from 'styled-components'
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const moveLeft = keyframes`
   0% {
    transform: translateX(-200%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  200% {
    transform: translateX(0%);
    opacity: 1;
  }
`
export const SucessBody = styled.div`
  padding: 0 10rem;
  animation: ${fadeIn} 1.2s ease-in-out;
  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }
`

export const SucessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 3s ease-in-out;
  img {
    animation: ${moveLeft} 3s linear;
    @media (max-width: 900px) {
      width: 328px;
      height: 196px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 0rem;
    gap: 1rem;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
    animation: ${fadeIn} 2.5s ease-in-out;
  }
  p {
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    animation: ${fadeIn} 2.9s ease-in-out;
  }
`

export const SucessCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top-left-radius: 8px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 8px;
  border: 1.5px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme['yellow-dark']},
        ${(props) => props.theme['purple-dark']}
      )
      border-box;

  padding: 1.5rem 1.5rem;
  animation: ${fadeIn} 5s ease-in-out;
  @media (max-width: 900px) {
    padding: 2rem 2rem;
  }
`
export const IconDivBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 32px;
  height: 32px;

  margin-right: 1rem;
  animation: ${fadeIn} 3s ease-in-out;
`
export const MapDiv = styled(IconDivBase)`
  background: ${(props) => props.theme.purple};
  svg {
    color: ${(props) => props.theme.white};
  }
`
export const TimeDiv = styled(IconDivBase)`
  background: ${(props) => props.theme['yellow-dark']};
  svg {
    color: ${(props) => props.theme.white};
  }
`
export const DollarDiv = styled(IconDivBase)`
  background: ${(props) => props.theme.yellow};
  svg {
    color: ${(props) => props.theme.white};
  }
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 0rem;
  }
`
export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 6rem;
  p {
    span {
      font-weight: 700;
      line-height: 130%;
    }
  }
  p:nth-child(2) {
    font-weight: 700;
    line-height: 130%;
  }
  @media (max-width: 900px) {
    padding: 1rem;
  }
`
