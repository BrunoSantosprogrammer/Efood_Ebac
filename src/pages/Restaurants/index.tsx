import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { HeaderHero } from '../../components/Header'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

export type Products = {
  cardapio: {
    foto: string
    id: number
    preco: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Restaurants = () => {
  const { id } = useParams()
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [id])

  if (!products) {
    return <h3>Carregando...</h3>
  }
  return (
    <div>
      <HeaderHero />
      <Banner />
      <div className="container">
        <ProductsList products={products} />
      </div>
    </div>
  )
}

export default Restaurants
