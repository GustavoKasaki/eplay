import { GalleryItems, Item } from './styles'
import zelda from '../../assets/images/zelda.png'
import spider from '../../assets/images/spiderman-banner.png'

const Gallery = () => (
  <GalleryItems>
    <Item>
      <img src={zelda} alt="Link" />
    </Item>
    <Item>
      <img src={spider} alt="Link" />
    </Item>
    <Item>
      <img src={zelda} alt="Link" />
    </Item>
    <Item>
      <img src={zelda} alt="Link" />
    </Item>
  </GalleryItems>
)

export default Gallery
