import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Details from './Details'




const App = () => {
  return (
    <>
      {/* <DisplayData /> */}
      <hr />

      <BrowserRouter>
        <h1>Welcome to our User Information App</h1>
        <ul>
          <li><Link to='/user/1'>User1</Link></li>
          <li><Link to='/user/2'>User2</Link></li>
          <li><Link to='/user/3'>User3</Link></li>
        </ul>
        <Routes>
          <Route path='/user/:userId' element={<Details/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
