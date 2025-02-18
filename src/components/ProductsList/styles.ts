import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, Colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? Colors.black : Colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Colors.gray : Colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ListTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
