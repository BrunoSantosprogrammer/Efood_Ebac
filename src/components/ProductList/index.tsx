import { Products } from '../../pages/Restaurants'
import Product from '../Product'
import { List } from './styles'

type Props = {
  products: Products[]
}

const ProductsList = ({ products }: Props) => (
  <div>
    <List>
      {products.map((product) => (
        <li key={product.cardapio.id}>
          <Product
            id={product.cardapio.id}
            image={product.cardapio.foto}
            title={product.cardapio.nome}
            description={product.cardapio.descricao}
            prices={product.cardapio.preco}
            portion={product.cardapio.porcao}
          />
        </li>
      ))}
    </List>
  </div>
)

export default ProductsList
