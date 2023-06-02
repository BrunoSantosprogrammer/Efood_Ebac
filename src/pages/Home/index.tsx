import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import Restaurants from '../../models/Restaurant'

import hiokiSushi from '../../assets/images/comidaJaponesa.png'
import laDolce from '../../assets/images/italiano.png'

const restaurants: Restaurants[] = [
  {
    id: 1,
    Image: hiokiSushi,
    title: 'Hioki Sushi ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    assessment: 4.9,
    infos: ['Destaque da semana', 'japonesa'],
    path: '/hiokiSushi'
  },
  {
    id: 2,
    Image: laDolce,
    title: 'La Dolce Vita Trattoria ',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: 4.6,
    infos: ['japonesa'],
    path: '/laDolceVitaTrattoria'
  },
  {
    id: 3,
    Image: laDolce,
    title: 'La Dolce Vita Trattoria ',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: 4.6,
    infos: ['japonesa'],
    path: '/laDolceVitaTrattoria'
  },
  {
    id: 4,
    Image: laDolce,
    title: 'La Dolce Vita Trattoria ',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: 4.6,
    infos: ['japonesa'],
    path: '/laDolceVitaTrattoria'
  },
  {
    id: 5,
    Image: laDolce,
    title: 'La Dolce Vita Trattoria ',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: 4.6,
    infos: ['japonesa'],
    path: '/laDolceVitaTrattoria'
  },
  {
    id: 6,
    Image: laDolce,
    title: 'La Dolce Vita Trattoria ',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    assessment: 4.6,
    infos: ['japonesa'],
    path: '/laDolceVitaTrattoria'
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <RestaurantsList restaurants={restaurants} />
    </div>
  </>
)

export default Home
