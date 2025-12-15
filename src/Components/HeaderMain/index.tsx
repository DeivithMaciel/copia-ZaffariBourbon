import MenuHamburguer from '../MenuHamburguer'

import logo from '../../Assets/images/logo-desktop.svg'

import {
  CircleUser,
  ClipboardList,
  Heart,
  Search,
  ShoppingCart
} from 'lucide-react'

import * as S from './styles'
import { Link } from 'react-router-dom'

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
    <Link className="link" to={'/'}>
      <ClipboardList className="icon" />
      <span>Minhas Listas</span>
    </Link>
    <Link className="link" to={'/'}>
      <Heart className="icon" />
      <span>Favoritos</span>
    </Link>
    <Link className="link" to={'/'}>
      <CircleUser className="icon" />
      <span>Entrar</span>
    </Link>
    <div className="cart">
      <span>
        <ShoppingCart />
      </span>
    </div>
  </S.MainHeader>
)

export default HeaderMain
