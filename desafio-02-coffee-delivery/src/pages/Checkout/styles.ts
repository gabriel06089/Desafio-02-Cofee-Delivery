import styled, { keyframes } from 'styled-components'
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 6;
  gap: 0.75rem;
  animation: ${fadeIn} 0.8s ease-in-out;
`
export const HeaderText = styled.div`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  animation: ${fadeIn} 1.5s ease-in-out;
  padding-bottom: 0.8rem;
`
export const HeaderText2 = styled.div`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  animation: ${fadeIn} 1.5s ease-in-out;
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

export const ColumContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderDiv = styled(ColumContainer)`
  gap: 0.8rem;
  animation: ${fadeIn} 1.8s ease-in-out;
`
export const AnimationInputCard = styled.div`
  animation: ${fadeIn} 1.2s ease-in-out;
`

export const AnimationPaymentCard = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
`
export const AnimationOrderCard = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
`
