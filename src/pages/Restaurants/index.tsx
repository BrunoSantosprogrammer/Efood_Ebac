import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { HeaderHero } from '../../components/Header'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import { Restaurants as Restaurantes } from '../Home'
import { ContainerProducts } from './styles'

const Restaurants = () => {
  const { id } = useParams()
  const [products, setProducts] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [id])

  if (!products) {
    return <h3>Carregando...</h3>
  }

  return (
    <ContainerProducts>
      <HeaderHero />
      <Banner />
      <div className="container">
        <ProductsList products={products} />
      </div>
    </ContainerProducts>
  )
}

export default Restaurants
