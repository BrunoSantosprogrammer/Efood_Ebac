import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.png'
import backgroundImgHeader from '../../assets/images//Vector.png'

import * as S from './style'
import { RootReducer } from '../../store'

const Header = () => (
  <S.HeaderBar style={{ backgroundImage: `url(${backgroundImgHeader})` }}>
    <img src={logo} alt="Efood Ebac" />
    <p>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </p>
  </S.HeaderBar>
)

export default Header

export const HeaderHero = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar
      style={{
        backgroundImage: `url(${backgroundImgHeader})`
      }}
    >
      <S.Links className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="Efood Ebac" />
        <S.CartButton onClick={openCart}>
          {items.length} produtos(s) no carrinho
        </S.CartButton>
      </S.Links>
    </S.HeaderBar>
  )
}
