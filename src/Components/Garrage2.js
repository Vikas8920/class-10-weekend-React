import React from 'react'
import Vehicle from './Vehicle'

const Garrage2 = () => {
    // const cars = ['Ford', 'Mercedes', 'BMW']
    const cars = [
        {id:1, brand: 'Ford'},                          // car = {id:1, brand: 'Ford'}
        {id:2, brand: 'Mercedes'},
        {id:3, brand: 'BMW'}
    ]
  return (
    <>
      <h1>Who lives in my Garrage?</h1>
      <ul>
        {cars.map((car) => <Vehicle key={car.id} brand={car.brand}/>)}
      </ul>
    </>
  )
}

export default Garrage2
