import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterSection = styled.footer`
  background-color: ${colors.peachColor};
  max-width: 1366px;
  heigth: 300px;
  padding: 40px;
  text-align: center;
`
export const Links = styled.ul`
  padding-top: 32px;
  padding-bottom: 80px;

  .facebook {
    margin-right: 8px;
    margin-left: 8px;
  }
`
export const LinkItem = styled.a`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
export const Description = styled.p`
  color: ${colors.redColor};
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  line-weight: 12px;
`
