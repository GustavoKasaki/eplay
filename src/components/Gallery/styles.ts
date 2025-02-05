import styled from 'styled-components'
import { Colors } from '../../styles'

export const GalleryItems = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 16px;

  img {
    border: 2px solid ${Colors.white}
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`
