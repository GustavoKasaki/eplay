import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <S.FooterSection>
        <S.FooterTitle>Categories</S.FooterTitle>
        <S.FooterList>
          <li>
            <S.FooterLink title="Click to view RPG games" to="/categories#rpg">
              RPG
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Click to view Action games"
              to="/categories#action"
            >
              Action
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Click to view Sports games"
              to="/categories#sports"
            >
              Sports
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Click to view Simulation games"
              to="/categories#sim"
            >
              Simulation
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Click to view Fight games"
              to="/categories#fight"
            >
              Fight
            </S.FooterLink>
          </li>
        </S.FooterList>
      </S.FooterSection>
      <S.FooterSection>
        <S.FooterTitle>Quick access</S.FooterTitle>
        <S.FooterList>
          <li>
            <S.FooterLink title="Click to view games on sale" to="/#on-sale">
              Sale
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink title="Click to view games TBD" to="/#soon">
              Soon
            </S.FooterLink>
          </li>
        </S.FooterList>
      </S.FooterSection>
      <p>{currentYear} - &copy;EPLAY - All rights reserved</p>
    </div>
  </S.FooterContainer>
)

export default Footer
