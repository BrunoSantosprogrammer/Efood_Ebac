import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardContainer = styled.div`
  width: 100%;
  padding: 8px;
  margin-bottom: 32px;
  color: ${colors.peachColor};
  background-color: ${colors.redColor};
  text-decoration: none;
  display: block;

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
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 0;
`
export const Imagem = styled.div`
  width: 100%;
  height: 218px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.isVisible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContainer = styled.div`
  width: 100%;
  height: 344px;
  margin: 0 120px;
  display: flex;
  color: ${colors.whitePrimary};
  background-color: ${colors.redColor};
  padding: 32px;
  position: relative;
  z-index: 1;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin: 16px 0;
    width: 100%;

    @media (max-width: 767px) {
      width: 80%;
    }
  }

  > img {
    width: 280px;
    heigth: 280px;
    object-fit: fill;
    margin-right: 24px;
  }

  div {
    img {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 8px;
      margin-right: 8px;
      cursor: pointer;
    }
  }

  span {
    color: ${colors.redColor};
    background-color: ${colors.peachColor};
    padding: 4px 8px;
    font-size: 14px;
    font-weight: bold;
  }

  ${ButtonContainer} {
    width: 280px;
    heigth: 24px;
    color: ${colors.redColor};
    background-color: ${colors.peachColor};
    font-size: 14px;
    padding: 4px 0 4px 8px;
  }

  @media (max-width: 767px) {
    width: 80%;
    height: 80%;
    display: block;
  }
`
