import MenuHamburguer from '../MenuHamburguer'

import logo from '../../Assets/images/logo-desktop.svg'

import { Search } from 'lucide-react'

import * as S from './styles'

const HeaderMain = () => (
  <S.MainHeader>
    <img src={logo} alt="Zaffari Bourbon" />
    <MenuHamburguer />
    <S.Search>
      <input
        type="text"
        id="downshift"
        placeholder="Pesquise produtos ou marcas"
      />
      <button aria-label="Buscar produtos">
        <Search />
      </button>
    </S.Search>
  </S.MainHeader>
)

export default HeaderMain
