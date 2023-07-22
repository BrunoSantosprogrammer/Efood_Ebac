import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

export type Restaurants = {
  id: number
  capa: string
  titulo: string
  descricao: string
  avaliacao: number
  tipo: string
  destacado: boolean
  path: string
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

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
