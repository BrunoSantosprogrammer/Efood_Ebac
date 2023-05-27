import { CardContainer, Description, Imagem, TitleCard } from './styles'
import Button from '../Button'

export type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <CardContainer>
    <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
    <TitleCard>{title} </TitleCard>
    <Description>{description}</Description>
    <Button type="button" title="Adicionar item ao carrinho">
      Adicionar ao carrinho
    </Button>
  </CardContainer>
)

export default Product
