import React from 'react'

const Conditional = () => {
   const x = 5
//    let text = 'Good bye!'
//    if(x<10){
//     text = 'Hello React'
//    }

  return (
    <>
      <h1>{(x<10)?'Hello React': 'Good bye'}</h1>
    </>
  )
}

export default Conditional
