import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import './App.css'
import NoPage from './Components/NoPage'
import ParentComponent from './Components/ParentComponent'

const App = () => {
  return (
    <>
     <Router>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NoPage/>}/>
       </Routes>
     </Router>

     <hr/>
     <ParentComponent/>
    </>
  )
}

export default App
