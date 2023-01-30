import {Route, Routes} from 'react-router-dom'
import { AboutPage } from './pages/about';
import { ProductPage } from './pages/products';
import {Navigation} from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <ProductPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
      </Routes>
    </>
  )
}

export default App;