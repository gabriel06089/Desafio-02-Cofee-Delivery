import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 6;
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

export const ColumContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderDiv = styled(ColumContainer)`
  gap: 0.8rem;
`
