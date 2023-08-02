import { HeaderBar, Links } from './style'
import logo from '../../assets/images/logo.png'
import backgroundImgHeader from '../../assets/images//Vector.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${backgroundImgHeader})` }}>
    <img src={logo} alt="Efood Ebac" />
    <p>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </p>
  </HeaderBar>
)

export default Header

export const HeaderHero = () => (
  <HeaderBar
    style={{
      backgroundImage: `url(${backgroundImgHeader})`
    }}
  >
    <Links className="container">
      <Link to="/">Restaurantes</Link>
      <img src={logo} alt="Efood Ebac" />
      <a href="#">0 produtos(s) no carrinho</a>
    </Links>
  </HeaderBar>
)
