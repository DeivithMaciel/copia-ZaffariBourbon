import { BrowserRouter } from 'react-router-dom'
import Header from './Containers/Header'
import { GlobalStyle } from './GlobalStyles'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
      </BrowserRouter>
    </>
  )
}

export default App
