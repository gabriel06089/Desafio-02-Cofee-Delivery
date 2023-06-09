import styled from 'styled-components'
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 3rem 10rem;
  gap: 1rem;
  width: 100%;
  img {
    width: 30rem;
    height: 22.5rem;
    left: calc(50% - 476px / 2 + 322px);
    top: calc(50% - 360px / 2);
  }
  @media (max-width: 900px) {
    font-size: 1.5rem;
    flex-direction: column;
    padding: 1rem 2rem;
    justify-content: center;
    align-items: center;
    img {
      width: 15rem;
      height: 11.25rem;
    }
  }
`
export const DescContainer = styled.div`
  flex-direction: column;
  width: 60%;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    @media (max-width: 900px) {
      font-size: 1.5rem;
    }
  }
  span {
    font-size: 1.25rem;
    line-height: 130%;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`

export const GridContainer = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (max-width: 900px) {
    padding-top: 1rem;
    gap: 0.5rem;
    grid-template-columns: repeat(1, 1fr);
  }
`
export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    margin-left: 1rem;
    @media (max-width: 900px) {
      margin-right: 0rem;
      margin-left: 3rem;
    }
  }
  @media (max-width: 900px) {
  }
`
export const IconTextContainer2 = styled.div`
  display: flex;
  align-items: center;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-left: 1rem;
    @media (max-width: 900px) {
      margin-right: 1rem;
      margin-left: 0rem;
    }
  }
  @media (max-width: 900px) {
    direction: rtl;
  }
`
export const IconBaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 38px;
  height: 38px;
`

export const CartDiv = styled(IconBaseContainer)`
  background: ${(props) => props.theme['yellow-dark']};

  svg {
    color: ${(props) => props.theme.white};
  }
`
export const TimerDiv = styled(IconBaseContainer)`
  background: ${(props) => props.theme.yellow};
  svg {
    color: ${(props) => props.theme.white};
  }
`
export const BoxDiv = styled(IconBaseContainer)`
  background: ${(props) => props.theme['base-text']};
  svg {
    color: ${(props) => props.theme.white};
  }
`
export const CoffeeDiv = styled(IconBaseContainer)`
  background: ${(props) => props.theme['purple-dark']};
  svg {
    color: ${(props) => props.theme.white};
  }
`
