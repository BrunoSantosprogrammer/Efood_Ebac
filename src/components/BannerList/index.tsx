import Banners from '../../models/Banner'
import Banner from '../Banner'

export type Props = {
  banners: Banners[]
}

const BannerList = ({ banners }: Props) => (
  <div>
    {banners.map((banner) => (
      <Banner
        key={banner.id}
        imgBanner={banner.Image}
        title={banner.title}
        category={banner.category}
      />
    ))}
  </div>
)

export default BannerList
