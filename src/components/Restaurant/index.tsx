import Tag from '../tag'
import { Card, CardContainer, Description, Imagem, TitleCard } from './styles'
import stars from '../../assets/images/estrelaFavorita.png'
import Button from '../Button'

export type Props = {
  title: string
  category: string
  assessment: number
  description: string
  image: string
  path: string
}

const Restaurant = ({
  category,
  title,
  assessment,
  description,
  image,
  path
}: Props) => (
  <CardContainer>
    <Imagem style={{ backgroundImage: `url(${image})` }}>
      <Tag>Destaque da semana</Tag>
      <Tag>{category}</Tag>
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

// export const RestaurantDestaque = ({
//   category,
//   title,
//   assessment,
//   description,
//   image
// }: Props) => (
//   <CardContainer>
//     <Imagem style={{ backgroundImage: `url(${image})` }}>
//       <Tag>Destaque da semana</Tag>
//       <Tag>{category}</Tag>
//     </Imagem>
//     <Card>
//       <div>
//         <TitleCard>{title} </TitleCard>
//         <span>
//           {assessment}
//           <img src={stars} alt="Estrela favorita" />
//         </span>
//       </div>
//       <Description>{description}</Description>
//       <Button
//         type="link"
//         title="Clique aqui e saiba mais sobre o restaurante"
//         to="/restaurante"
//       >
//         Saiba mais
//       </Button>
//     </Card>
//   </CardContainer>
// )
