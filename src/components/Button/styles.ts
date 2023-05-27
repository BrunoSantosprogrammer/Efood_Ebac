import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.a`
  width: 82px;
  height: 24px;
  background-color: ${colors.redColor};
  color: ${colors.peachColor};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  background-color: ${colors.redColor};
  color: ${colors.peachColor};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  border: none;
  cursor: pointer;
`
