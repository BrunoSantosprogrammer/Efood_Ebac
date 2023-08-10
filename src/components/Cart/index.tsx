import { useDispatch, useSelector } from 'react-redux'

import sushi from '../../assets/images/comidaJaponesa.png'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import Button from '../Button'

import * as S from './styles'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <S.CartContainer className={isOpen ? 'isOpen' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.CartLists>
          <S.List>
            <img src={sushi} alt=" " />
            <div>
              <h3>Pizza marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </S.List>
          <S.List>
            <img src={sushi} alt=" " />
            <div>
              <h3>Pizza marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </S.List>
        </S.CartLists>
        <S.Amount>
          <p>Valor total:</p>
          <span>R$ 60,90</span>
        </S.Amount>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          Continuar com a entrega
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
