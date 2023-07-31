import { Restaurants } from '../../pages/Home'
import Product from '../Product'
import { List } from './styles'

type Props = {
  products: Restaurants
}

const ProductsList = ({ products }: Props) => (
  <div>
    <List>
      {products.cardapio.map((plate) => (
        <li key={plate.id}>
          <Product
            id={plate.id}
            image={plate.foto}
            title={plate.nome}
            description={plate.descricao}
            prices={plate.preco}
            portion={plate.porcao}
          />
        </li>
      ))}
    </List>
  </div>
)
export default ProductsList
