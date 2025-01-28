import styled from 'styled-components'
import { Colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${Colors.gray};
  padding: 32px 0;
  font-size: 14px;
`

export const FooterTitle = styled.h4`
  color: ${Colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const FooterList = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const FooterLink = styled.a`
  color: ${Colors.lightgray};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const FooterCopyright = styled.p``
