import React, { useEffect, useState } from 'react'

const DisplayData = () => {
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then((response)=>response.json())
        .then((data)=>setUsers(data.users))
    }, [])
  return (
    <>
      {users.map((user)=>(
        <div key={user.id}>
            <h1>Full Name: {user.firstName + ' ' + user.lastName}</h1>
            <h2>Email: {user.email}</h2>
            <h2>Age: {user.age}</h2>
            <hr/>
        </div>
      ))}
    </>
  )
}

export default DisplayData
