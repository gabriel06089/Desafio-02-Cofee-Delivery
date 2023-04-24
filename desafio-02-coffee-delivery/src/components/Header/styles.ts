import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  gap: 1rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 1rem;
  }
`

export const BaseDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 0.75rem;
  width: 100%;
`

export const CartButton = styled(BaseDiv)`
  background: ${(props) => props.theme['yellow-light']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CityButton = styled(BaseDiv)`
  background: ${(props) => props.theme['purple-light']};
  span {
    color: ${(props) => props.theme['purple-dark']};
  }
  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`
