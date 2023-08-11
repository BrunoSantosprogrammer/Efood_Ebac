import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    gap: 48px;
    margin-bottom: 80px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-bottom: 40px;
  }
`
