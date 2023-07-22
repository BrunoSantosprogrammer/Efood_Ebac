import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div`
  background-color: ${colors.redColor};
  color: ${colors.peachColor};
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
  margin-top: 16px;
`
export const TagEmphasis = styled(TagContainer)<Props>`
  display: ${(props) => (props.emphasis === true ? 'inline-block' : 'none')};
`
