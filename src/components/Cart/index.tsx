import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrices } from '../Product'

import * as S from './styles'
import Button from '../Button'

import oi from '../../assets/images/comidaJaponesa.png'

const Cart = () => {
  const { id } = useParams()

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalprices = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.cardapio!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.CartLists>
          {/* {cardapio.map((product) => (
            <S.List key={product.id}>
              <img src={oi} alt="" />
              <div>
                <h3>{product.nome}</h3>
                <span>{product.preco}</span>
              </div>
              <button type="button" onClick={() => removeItem(product.id)} />
            </S.List>
          ))} */}
        </S.CartLists>
        <S.Amount>
          <p>Valor total:</p>
          <span>{formatPrices(getTotalprices())}</span>
        </S.Amount>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          Continuar com a entrega
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
