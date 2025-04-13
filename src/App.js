import React, { useState } from 'react'
import Form from './Components/Form'

const App = () => {
  const [form, setForm] = useState(true)
  const [msg, setMsg] = useState('')

  // login Form
  const handleForm = () =>{
    if(form === false){
      setForm(true)
      setMsg('Login form shows successfully')
    }
  }

  // Registration Form
 const handleForm1 = () =>{
  if(form === true){
    setForm(false)
    setMsg('Registration form shows successfully')
  }
 }
  return (
    <>
      <div className='container d-flex justify-content-evenly'>
        <div className='mt-5'>
          <button onClick={handleForm} className='btn btn-success mx-4 px-4'>Login Form</button>
          <button onClick={handleForm1} className='btn btn-primary'>Registration Form</button>
          <h4 className='mt-5 pt-5 ms-4 text-primary'>{msg}</h4>
        </div>
        <div>
          <Form form={form}/>
        </div>
      </div>
    </>
  )
}

export default App
