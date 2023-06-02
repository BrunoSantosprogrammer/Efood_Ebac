import Tag from '../tag'
import {
  Card,
  CardContainer,
  Description,
  Imagem,
  Infos,
  TitleCard
} from './styles'
import stars from '../../assets/images/estrelaFavorita.png'
import Button from '../Button'

export type Props = {
  title: string
  assessment: number
  description: string
  image: string
  path: string
  infos: string[]
}

const Restaurant = ({
  infos,
  title,
  assessment,
  description,
  image,
  path
}: Props) => (
  <CardContainer>
    <Imagem style={{ backgroundImage: `url(${image})` }}>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
    </Imagem>
    <Card>
      <div>
        <TitleCard>{title} </TitleCard>
        <span>
          {assessment}
          <img src={stars} alt="Estrela favorita" />
        </span>
      </div>
      <Description>{description}</Description>
      <Button
        type="link"
        title="Clique aqui e saiba mais sobre o restaurante"
        to={path}
      >
        Saiba mais
      </Button>
    </Card>
  </CardContainer>
)

export default Restaurant
