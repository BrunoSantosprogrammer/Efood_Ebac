import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.div`
  height: 384px;
  padding: 40px 0;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.redColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 80px;

  img {
    width: 126px;
    height: 58px;
  }

  p {
    max-width: 539px;
    height: 84px;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 24px;
      margin-top: 40px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    margin-bottom: 60px;
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${colors.redColor};
    font-size: 18px;
    line-height: 20px;
    font-weight: 900;
  }
`
export const CartButton = styled.a`
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
  }
`
