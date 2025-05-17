import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const {login} = useContext(AuthContext)

    const handlelogin = () =>{
        login(username)
    }
  return (
    <>
      <div>
        <input type='text' placeholder='Enter your name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={handlelogin}>Login</button>
      </div>
    </>
  )
}

export default Login
