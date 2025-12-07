import { Link } from 'react-router-dom'
import { JSX } from 'react'

import { HelpCircle, MapPin, LucideMapPinHouse } from 'lucide-react'
import { FaAngleRight } from 'react-icons/fa'
import { PiMapPinArea } from 'react-icons/pi'

import * as S from './styles'

const Links = () => {
  return (
    <S.HeaderLinks>
      <S.PagButtons>
        <a className="online-store">Loja Online</a>
        <a className="institucional">Institucional</a>
      </S.PagButtons>
      <S.LinksGroup>
        <S.LinkItem>
          <Link to="/">
            <MapPin size={16} /> <p>Encontre o Clique&Retire</p>
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/">
            <LucideMapPinHouse size={16} /> <p>Como Funciona o Delivery</p>
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/">
            <HelpCircle size={16} />
            <p>Atendimento</p>
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <a href="/">
            <p>{PiMapPinArea({ size: 16 }) as JSX.Element}</p>
            Hipermercado Bourbon Assis Brasil
            <p>{FaAngleRight({ size: 16 }) as JSX.Element}</p>
          </a>
        </S.LinkItem>
      </S.LinksGroup>
    </S.HeaderLinks>
  )
}

export default Links
