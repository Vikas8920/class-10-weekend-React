import React from 'react'
import Car from './Car'

const Garrage = () => {
    const CarInfo = {name: 'Mercedes', model: 'G-Vagon'}
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand={CarInfo}/>
    </>
  )
}

export default Garrage
