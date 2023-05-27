import Restaurant from '../Restaurant'
import { List } from './styles'
import Restaurants from '../../models/Restaurant'

export type Props = {
  restaurants: Restaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div>
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          image={restaurant.Image}
          category={restaurant.category}
          title={restaurant.title}
          assessment={restaurant.assessment}
          description={restaurant.description}
          path={restaurant.path}
        />
      ))}
    </List>
  </div>
)

export default RestaurantsList
