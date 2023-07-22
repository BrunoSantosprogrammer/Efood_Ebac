import { HeaderBar, Links } from './style'
import logo from '../../assets/images/logo.png'
import backgroundImgHero from '../../assets/images//Vector.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${backgroundImgHero})` }}>
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
      backgroundImage: `url(${backgroundImgHero})`
    }}
  >
    <Links className="container">
      <Link to="/efood">Restaurantes</Link>
      <img src={logo} alt="Efood Ebac" />
      <a href="#">0 produtos(s) no carrinho</a>
    </Links>
  </HeaderBar>
)
