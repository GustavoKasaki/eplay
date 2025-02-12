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
            <FooterLink to="/categories#rpg">RPG</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories#action">Action</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories#sports">Sports</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories#sim">Simulation</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories#fight">Fight</FooterLink>
          </li>
        </FooterList>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Quick access</FooterTitle>
        <FooterList>
          <li>
            <FooterLink to="/#on-sale">Sale</FooterLink>
          </li>
          <li>
            <FooterLink to="/#soon">Soon</FooterLink>
          </li>
        </FooterList>
      </FooterSection>
      <p>{currentYear} - &copy;EPLAY All rights reserved</p>
    </div>
  </FooterContainer>
)

export default Footer
