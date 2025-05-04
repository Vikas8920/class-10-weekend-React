import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { userId } = useParams()

  const userData = {
    1: { name: 'Vikas', age: 50 },
    2: { name: 'Shruti', age: 30 },
    3: { name: 'Deepak', age: 60 }
  }

  const user = userData[userId]
  if (!user) {
    return <p>User not found</p>
  }

  return (
    <>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </>
  )
}

export default UserDetails

