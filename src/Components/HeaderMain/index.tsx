import MenuHamburguer from '../MenuHamburguer'

import logo from '../../Assets/images/logo-desktop.svg'

import * as S from './styles'

const HeaderMain = () => (
  <S.MainHeader>
    <img src={logo} alt="Zaffari Bourbon" />
    <MenuHamburguer />
  </S.MainHeader>
)

export default HeaderMain
