import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'

const App = () => {
  return (
    <>
      <Router>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App
