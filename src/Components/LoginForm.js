import React from 'react'

const LoginForm = () => {
    return (
        <>
            <div className='container mt-5 d-flex justify-content-center'>
            <form className='border border-1 border-dark rounded-1 p-4'>
                <h2 className='text-center'>Login Form</h2>
                <div className='container mt-4 d-flex justify-content-center'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' placeholder='Enter Username' id='username' className='ms-5'/>
                </div>
                <div className='container mt-4 d-flex justify-content-center'>
                    <label htmlFor='password' className='ms-2'>Password:</label>
                    <input type='password' placeholder='Enter Password' id='password' className='ms-5'/>
                </div>
                <div className='container mt-4'>
                   <button type='button' className='btn btn-primary'>Login</button>
                </div>
            </form>
            </div>
        </>
        )
}
 

export default LoginForm
