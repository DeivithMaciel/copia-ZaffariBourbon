import { BrowserRouter } from 'react-router-dom'
import Header from './Containers/Header'
import { GlobalStyle } from './GlobalStyles'
import HeroCarousel from './Containers/HeroCarousel'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <HeroCarousel />
      </BrowserRouter>
    </>
  )
}

export default App
