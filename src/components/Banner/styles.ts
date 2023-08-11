import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Imagem = styled.div`
  max-width: 100%;
  height: 280px;
  display: block;
  color: ${colors.whitePrimary};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`
export const HeroContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 280px;
  padding-top: 24px;
  padding-bottom: 32px;
  font-size: 32px;
  line-height: 38px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-weight: 100;
    }

    h2 {
      font-weight: 900;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`
