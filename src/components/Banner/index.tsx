import { Imagem, ImgContainer } from './styles'

export type Props = {
  imgBanner: string
  category: string
  title: string
}

const Banner = ({ imgBanner, category, title }: Props) => (
  <div>
    <Imagem style={{ backgroundImage: `url(${imgBanner})` }}>
      <ImgContainer className="container">
        <h3>{category}</h3>
        <h2>{title}</h2>
      </ImgContainer>
    </Imagem>
  </div>
)

export default Banner
