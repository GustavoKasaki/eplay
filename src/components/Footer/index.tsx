import {
  FooterContainer,
  FooterLink,
  FooterSection,
  FooterList,
  FooterTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterSection>
        <FooterTitle>Categories</FooterTitle>
        <FooterList>
          <li>
            <FooterLink>RPG</FooterLink>
          </li>
          <li>
            <FooterLink>Action</FooterLink>
          </li>
          <li>
            <FooterLink>Adventure</FooterLink>
          </li>
          <li>
            <FooterLink>Sports</FooterLink>
          </li>
          <li>
            <FooterLink>Simulation</FooterLink>
          </li>
          <li>
            <FooterLink>Strategy</FooterLink>
          </li>
          <li>
            <FooterLink>FPS</FooterLink>
          </li>
        </FooterList>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Quick access</FooterTitle>
        <FooterList>
          <li>
            <FooterLink>News</FooterLink>
          </li>
          <li>
            <FooterLink>Sale</FooterLink>
          </li>
          <li>
            <FooterLink>Soon</FooterLink>
          </li>
        </FooterList>
      </FooterSection>
      <p>{currentYear} - &copy;EPLAY All rights reserved</p>
    </div>
  </FooterContainer>
)

export default Footer
