import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { HeaderHero } from '../../components/Header'
import ProductList from '../../components/ProductList'

import Banner from '../../components/Banner'

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
  const [product, setProduct] = useState<Products[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
  }, [id])

  if (!product) {
    return <h3>Carregando...</h3>
  }
  return (
    <div>
      <HeaderHero />
      <Banner />
      <div className="container">
        <ProductList products={product} />
      </div>
    </div>
  )
}

export default Restaurants
