import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useGetProductsQuery } from '../../services/api'
import { formatPrices } from '../Product'

import * as S from './styles'
import Button from '../Button'

const Cart = () => {
  const { id } = useParams()
  const { data: products } = useGetProductsQuery(id!)

  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalprices = () => {
    return products?.cardapio.reduce((acc, currentValue) => {
      return (acc += currentValue.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <S.CartContainer className={isOpen ? 'isOpen' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.CartLists>
          {products?.cardapio.map((product) => (
            <S.List key={product.id}>
              <img src={product.foto} alt={product.nome} />
              <div>
                <h3>{product.nome}</h3>
                <span>{product.preco}</span>
              </div>
              <button type="button" onClick={() => removeItem(product.id)} />
            </S.List>
          ))}
        </S.CartLists>
        <S.Amount>
          <p>Valor total:</p>
          <span>{formatPrices(getTotalprices()!)}</span>
        </S.Amount>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          Continuar com a entrega
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
