import { HeaderHero } from '../../components/Header'
import ProductList from '../../components/ProductList'

import sushi from '../../assets/images/comidaJaponesa.png'
import sushiBanner from '../../assets/images/sushiBanner.jpg'
import Products from '../../models/Products'
import Banners from '../../models/Banner'
import BannerList from '../../components/BannerList'

const japonesa: Products[] = [
  {
    id: 1,
    Image: sushi,
    title: 'Sushi',
    description:
      'Arroz enrolado por tira de salmão, cream cheese e raspas de limão siciliano ou Tira de salmão, cream cheese e raspas de limão siciliano.'
  },
  {
    id: 2,
    Image: sushi,
    title: 'Sushi',
    description:
      'Arroz enrolado por tira de salmão, cream cheese e raspas de limão siciliano ou Tira de salmão, cream cheese e raspas de limão siciliano.'
  },
  {
    id: 3,
    Image: sushi,
    title: 'Sushi',
    description:
      'Arroz enrolado por tira de salmão, cream cheese e raspas de limão siciliano ou Tira de salmão, cream cheese e raspas de limão siciliano.'
  },
  {
    id: 4,
    Image: sushi,
    title: 'Sushi',
    description:
      'Arroz enrolado por tira de salmão, cream cheese e raspas de limão siciliano ou Tira de salmão, cream cheese e raspas de limão siciliano.'
  },
  {
    id: 5,
    Image: sushi,
    title: 'Sushi',
    description:
      'Arroz enrolado por tira de salmão, cream cheese e raspas de limão siciliano ou Tira de salmão, cream cheese e raspas de limão siciliano.'
  },
  {
    id: 6,
    Image: sushi,
    title: 'Sushi',
    description:
      'Arroz enrolado por tira de salmão, cream cheese e raspas de limão siciliano ou Tira de salmão, cream cheese e raspas de limão siciliano.'
  }
]

const banner: Banners[] = [
  { title: 'Hioki Sushi', category: 'japonesa', Image: sushiBanner, id: 1 }
]

const HiokiSushi = () => (
  <div>
    <HeaderHero />
    <BannerList banners={banner} />
    <div className="container">
      <ProductList items={japonesa} />
    </div>
    <div>
      <img src={sushi} alt="Sushi" />
      <div>
        <h2>Sushi</h2>
      </div>
    </div>
  </div>
)

export default HiokiSushi
