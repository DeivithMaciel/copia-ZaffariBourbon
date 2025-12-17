import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const Hero = styled.div`
  position: relative
  width: 100%;
  height: 520px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  .overlay {
  position: absolute
  inset: 0;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  }

  &:hover .overlay{
    opacity: 1;
  }
`
