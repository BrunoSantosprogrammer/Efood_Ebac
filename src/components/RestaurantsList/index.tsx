import { Restaurants } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { List } from './styles'

type Props = {
  restaurants: Restaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div>
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Restaurant
            image={restaurant.capa}
            infos={restaurant.tipo}
            title={restaurant.titulo}
            rate={restaurant.avaliacao}
            description={restaurant.descricao}
            emphasis={restaurant.destacado}
            path={`/restaurantes/${restaurant.id}`}
          />
        </li>
      ))}
    </List>
  </div>
)

export default RestaurantsList
