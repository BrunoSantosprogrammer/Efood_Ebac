import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardContainer = styled.div`
  width: 100%;
  padding: 8px;
  margin-bottom: 32px;
  color: ${colors.peachColor};
  background-color: ${colors.redColor};

  ${ButtonContainer} {
    width: 100%;
    height: 24px;
    color: ${colors.redColor};
    background-color: ${colors.peachColor};
    display: inline-block;
    text-align: center;
    padding: 4px 0;
  }
`

export const TitleCard = styled.h3`
  font-size: 16px;
  line-height: 18px;
  margin-top: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 0;
  width: 304px;
`
export const Imagem = styled.div`
  width: 100%;
  height: 218px;
  background-repeat: no-repeat;
  background-size: cover;
`
