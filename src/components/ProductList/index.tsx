import Products from '../../models/Products'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  items: Products[]
}

const ProductList = ({ items }: Props) => (
  <div>
    <List>
      {items.map((item) => (
        <Product
          key={item.id}
          image={item.Image}
          title={item.title}
          description={item.description}
        />
      ))}
    </List>
  </div>
)

export default ProductList
