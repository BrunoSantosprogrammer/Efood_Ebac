import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  padding-bottom: 48px;
`

export const Card = styled.div`
  color: ${colors.redColor};
  font-weight: 700;
  border: 1px solid ${colors.redColor};
  padding: 8px;
  background-color: ${colors.whiteBackground};
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    img {
      margin-left: 8px;
      height: 20px;
    }
  }
`
export const TitleCard = styled.h3`
  line-height: 20px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 16px 0;
  width: 456px;
`
export const Imagem = styled.div`
  position: relative;
  height: 218px;
  display: flex;
  justify-content: end;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
