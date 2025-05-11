import React, { useEffect, useRef, useState } from 'react'
import Counter from './Components/Counter'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const previousInputValue = useRef('')

  useEffect(()=>{
    previousInputValue.current = inputValue
  }, [inputValue])
  return (
    <>
      <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <h1>Current value: {inputValue}</h1>
      <h1>Previous Value: {previousInputValue.current}</h1>
      <hr/>

      <Counter/>
    </>
  )
}

export default App
