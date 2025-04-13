import React from 'react'

const RegistrationForm = () => {
  return (
    <>
    <div className='container mt-5 d-flex justify-content-center'>
    <form className='border border-1 border-dark rounded-1 p-4'>
        <h2 className='text-center'>Registration Form</h2>
        <div className='container mt-4 d-flex justify-content-center'>
            <label htmlFor='username'>Username:</label>
            <input type='text' placeholder='Enter Username' id='username' className='ms-5'/>
        </div>
        <div className='container mt-4 d-flex justify-content-center'>
            <label htmlFor='email' className='me-4'>Email:</label>
            <input type='email' placeholder='Enter Email' id='email' className='ms-5'/>
        </div>
        <div className='container mt-4 d-flex justify-content-center'>
            <label htmlFor='password' className='ms-2'>Password:</label>
            <input type='password' placeholder='Enter Password' id='password' className='ms-5'/>
        </div>
        <div className='container mt-4 d-flex justify-content-center'>
            <label htmlFor='cpassword' className='ms-2'>Confirm <br/> Password:</label>
            <input type='password' placeholder='Enter Confirm Password' id='cpassword' className='ms-5'/>
        </div>
        <div className='container mt-4'>
           <button type='button' className='btn btn-primary'>Register</button>
        </div>
    </form>
    </div>
</>
  )
}

export default RegistrationForm
