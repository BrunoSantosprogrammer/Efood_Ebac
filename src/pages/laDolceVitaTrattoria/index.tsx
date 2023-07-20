import { HeaderHero } from '../../components/Header'
import ProductList from '../../components/ProductList'

import Products from '../../models/Products'
import Banners from '../../models/Banner'
import BannerList from '../../components/BannerList'

import pizzaMarguerita from '../../assets/images/marguerita.png'
import laDulce from '../../assets/images/italiano.png'

const pizzas: Products[] = [
  {
    id: 1,
    Image: pizzaMarguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    Image: pizzaMarguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    Image: pizzaMarguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    Image: pizzaMarguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    Image: pizzaMarguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    Image: pizzaMarguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const banner: Banners[] = [
  { title: 'La dulce ', category: 'italiana', Image: laDulce, id: 1 }
]

const LaDolce = () => (
  <div>
    <HeaderHero />
    <BannerList banners={banner} />
    <div className="container">
      <ProductList items={pizzas} />
    </div>
  </div>
)

export default LaDolce
