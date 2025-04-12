import React, { useState } from 'react'

const AnotherForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name, email, phone)
    }
  return (
    <>
      <form action='' method='post' onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='phone'>Phone:</label>
            <input type='tel' id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div>
            <button type='submit'>submit</button>
        </div>
      </form>
    </>
  )
}

export default AnotherForm
