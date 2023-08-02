import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurants } from '../../pages/Home'
import { HeroContent, Imagem } from './styles'

const Banner = () => {
  const { id } = useParams()
  const [restaurants, setRestaurants] = useState<Restaurants>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [id])

  if (!restaurants) {
    return <h4>Carregando</h4>
  }
  return (
    <div>
      <Imagem style={{ backgroundImage: `url(${restaurants.capa})` }}>
        <HeroContent>
          <div className="container">
            <h3>{restaurants.tipo}</h3>
            <h2>{restaurants.titulo}</h2>
          </div>
        </HeroContent>
      </Imagem>
    </div>
  )
}
export default Banner
