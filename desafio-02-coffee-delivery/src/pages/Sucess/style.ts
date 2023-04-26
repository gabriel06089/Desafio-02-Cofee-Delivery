import styled from 'styled-components'
export const SucessBody = styled.div`
  padding: 0 10rem;
`
export const SucessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  }
  p {
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
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
`
export const IconDivBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 32px;
  height: 32px;

  margin-right: 1rem;
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
`
