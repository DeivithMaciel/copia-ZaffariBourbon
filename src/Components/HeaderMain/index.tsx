import MenuHamburguer from '../MenuHamburguer'

import logo from '../../Assets/images/logo-desktop.svg'

import { CiSearch } from 'react-icons/ci'

import * as S from './styles'
import React from 'react'

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
      <button>
        <CiSearch size={16} />
      </button>
    </S.Search>
  </S.MainHeader>
)

export default HeaderMain
