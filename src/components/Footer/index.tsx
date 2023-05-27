import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { Description, Links, FooterSection, LinkItem } from './styles'

const Footer = () => (
  <FooterSection>
    <img src={logo} alt="Efood Ebac " />
    <Links>
      <LinkItem>
        {' '}
        <img src={instagram} alt="Instagram" />
      </LinkItem>
      <LinkItem>
        <img className="facebook" src={facebook} alt="Facebook" />
      </LinkItem>
      <LinkItem>
        <img src={twitter} alt="Twitter" />
      </LinkItem>
    </Links>
    <Description>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </Description>
  </FooterSection>
)

export default Footer
