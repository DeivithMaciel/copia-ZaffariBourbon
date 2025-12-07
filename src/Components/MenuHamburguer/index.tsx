import { useState } from 'react'
import * as S from './styles'

const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.HamburguerMenu>
      <button
        className={`navbar-toggler ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span className="icon">☰</span>
        <span>CORREDORES</span>
      </button>

      <div className={`offcanvas ${isOpen ? 'show' : ''}`}>
        <div className="offcanvas-header">
          <h5>corredores</h5>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>Mercearia</li>
            <li>Bebidas</li>
            <li>Carnes</li>
            <li>Padaria</li>
          </ul>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={toggleMenu} />}
    </S.HamburguerMenu>
  )
}

export default MenuHamburguer
