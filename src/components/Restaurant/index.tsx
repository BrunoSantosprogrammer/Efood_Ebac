import Tag, { TagDestaque } from '../tags'
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
  rate: number
  description: string
  image: string
  path: string
  infos: string
  emphasis: boolean
}

const getDescriptionRestaurant = (description: string) => {
  if (description.length > 245) {
    return description.slice(0, 245) + '...'
  }
  return description
}

const Restaurant = ({
  infos,
  title,
  rate,
  description,
  image,
  emphasis,
  path
}: Props) => {
  return (
    <CardContainer>
      <Imagem style={{ backgroundImage: `url(${image})` }}>
        <Infos>
          <TagDestaque emphasis={emphasis} />
          <Tag>{infos}</Tag>
        </Infos>
      </Imagem>
      <Card>
        <div>
          <TitleCard>{title} </TitleCard>
          <span>
            {rate}
            <img src={stars} alt="Estrela favorita" />
          </span>
        </div>
        <Description>{getDescriptionRestaurant(description)}</Description>
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
}

export default Restaurant
