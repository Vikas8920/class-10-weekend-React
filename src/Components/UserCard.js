import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <>
      <div className='card' style={{width:'18rem'}}>
        <img src={user.image} alt='user' width={'270px'} height={'220px'}/>
        <div className='card-body'>
            <h6 className='card-title'>Full Name: {user.firstName + ' ' + user.lastName}</h6>
            <h6 className='card-title'>Email: {user.email}</h6>
            <h6 className='card-title'>Age: {user.age}</h6>
            <h6 className='card-title'>Gender: {user.gender}</h6>
            <h6 className='card-title'>DOB: {user.birthDate}</h6>
            <Link to={`/users/${user.id}`} className='btn btn-primary mt-2'>Show Details</Link>

        </div>
      </div>
    </>
  )
}

export default UserCard
