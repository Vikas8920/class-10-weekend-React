import React, { useState } from 'react'

const Counter2 = () => {
    const [count, setCount] =  useState(0)

    const increment = () => {
        setCount(count + 1)
    }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default Counter2
