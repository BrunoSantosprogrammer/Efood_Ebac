import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.div`
  padding: 40px 0;
  text-align: center;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.redColor};

  img {
    width: 126px;
    height: 58px;
  }

  p {
    padding-top: 80px;
    padding-bottom: 80px;
    height: 84px;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
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
