import { TagContainer, TagEmphasis } from './styles'

export type Props = {
  children?: string
  emphasis?: boolean
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag

export const TagDestaque = ({ emphasis }: Props) => (
  <TagEmphasis emphasis={emphasis}>Destaque da semana</TagEmphasis>
)
