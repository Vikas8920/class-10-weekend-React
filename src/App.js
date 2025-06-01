import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'

const App = () => {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
