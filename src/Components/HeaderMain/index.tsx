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
  <>
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
    <S.Menu>
      <ul>
        <li>
          <Link to={'/'}>REVISTA</Link>
        </li>
        <li>
          <Link to={'/'}>SEM LACTOSE</Link>
        </li>
        <li>
          <Link to={'/'}>HORTIFRUTI</Link>
        </li>
        <li>
          <Link to={'/'}>FRIOS E LATICÍNIOS</Link>
        </li>
        <li>
          <Link to={'/'}>CARNES</Link>
        </li>
        <li>
          <Link to={'/'}>BEBIDAS</Link>
        </li>
        <li>
          <Link to={'/'}>MERCEARIA</Link>
        </li>
        <li>
          <Link to={'/'}>IDEIAS DE PRESENTE</Link>
        </li>
        <li>
          <Link to={'/'}>PRODUTOS EM ALTA</Link>
        </li>
        <li>
          <Link to={'/'}>OFERTAS DO DIAS</Link>
        </li>
      </ul>
    </S.Menu>
  </>
)

export default HeaderMain
