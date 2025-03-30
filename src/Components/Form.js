import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`The name you entered is : ${name}`)
        setName(e.target.value = '')
    }
    const handleChange = (e) =>{
        setName(e.target.value)
    }
  return (
    <>
      <form action='' method='post' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' placeholder='Enter your name' id='name' value={name} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form
