import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  max-width: 472px;
  max-height: 398px;
`

export const Card = styled.div`
  width: 100%;
  height: 100%;
  color: ${colors.redColor};
  font-weight: 700;
  border: 1px solid ${colors.redColor};
  background-color: ${colors.whiteBackground};
  padding: 8px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      width: 55px;
      height: 22px;
      display: flex;
      aligin-items: center;
      margin-left: 8px;
      font-size: 18px;
      column-gap: 8px;
    }
  }
`
export const TitleCard = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 16px 0;
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
