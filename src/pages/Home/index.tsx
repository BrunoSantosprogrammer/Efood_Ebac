import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetRestaurantsQuery } from '../../services/api'

export type Cardapio = {
  foto: string
  id: number
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  capa: string
  titulo: string
  descricao: string
  avaliacao: number
  tipo: string
  destacado: boolean
  path: string
  cardapio: Array<Cardapio>
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <div className="container">
        <RestaurantsList restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
