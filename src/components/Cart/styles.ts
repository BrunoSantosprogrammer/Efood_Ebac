import styled from 'styled-components'
import bin from '../../assets/images/bin.png'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.isOpen {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  width: 360px;
  height: 100%;
  background-color: ${colors.redColor};
  z-index: 1;
  padding: 32px 8px 0 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;

  ${ButtonContainer} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const CartLists = styled.ul`
  display: grid;
  row-gap: 16px;
`
export const List = styled.li`
  display: flex;
  color: ${colors.redColor};
  background-color: ${colors.peachColor};
  padding: 8px 0 12px 8px;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 400;
    line-height: 22px;
  }

  button {
    background-image: url(${bin});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
export const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.peachColor};
  margin-top: 40px;
  margin-bottom: 16px;
`
