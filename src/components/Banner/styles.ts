import styled from 'styled-components'
import { colors } from '../../styles'

export const ImgContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 280px;

  &.container {
    padding: 0 120px;
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  font-size: 32px;
  line-weight: 38px;
  color: ${colors.whitePrimary};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  h3 {
    font-weight: 100;
    margin-top: 24px;
    margin-bottom: 136px;
  }

  h2 {
    font-weight: 900;
  }
`
