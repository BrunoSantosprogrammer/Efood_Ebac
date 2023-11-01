import { useParams } from 'react-router-dom'

import { HeaderHero } from '../../components/Header'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import { ContainerProducts } from './styles'
import { useGetProductsQuery } from '../../services/api'

const Restaurants = () => {
  const { id } = useParams()

  const { data: products } = useGetProductsQuery(id ?? '')

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
