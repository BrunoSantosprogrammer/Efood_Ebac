import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FooterSection = styled.footer`
  background-color: ${colors.peachColor};
  width: 100%;
  height: 298px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 120px;

  > img {
    width: 125px;
    height: 58px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    margin-top: 60px;
  }
`
export const Links = styled.ul`
  padding-top: 32px;
  padding-bottom: 80px;

  .facebook {
    margin-right: 8px;
    margin-left: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 40px;
  }
`
export const LinkItem = styled.a`
  width: 88px;
  height: 24px;
  img {
    width: 24px;
    cursor: pointer;
  }
`
export const Description = styled.p`
  max-width: 480px;
  color: ${colors.redColor};
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  line-height: 12px;
`
