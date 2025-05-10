import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {userId} = useParams()
    const [userDetails, setUserDetails] = useState(null)

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(response=>response.json())
        .then(data=>setUserDetails(data))
    }, [userId])
  return (
    <>
      <div className='container mt-3'>
          {userDetails?(
            <div className='row mt-3'>
                <h2 className='text-center mb-3'>User Details</h2>
                <div className='col-md-6 border border-1 border-dark rounded-1 d-flex justify-content-center align-items-center p-4'>
                    <img src={userDetails.image} alt='' width={'200px'}/>
                </div>
                <div className='col-md-6 border border-1 border-dark rounded-1 p-4 pt-5'>
                <h6 className='card-title'>Full Name: {userDetails.firstName + ' ' + userDetails.lastName}</h6>
                <h6 className='card-title'>Email: {userDetails.email}</h6>
                <h6 className='card-title'>Age: {userDetails.age}</h6>
                <h6 className='card-title'>Gender: {userDetails.gender}</h6>
                <h6 className='card-title'>DOB: {userDetails.birthDate}</h6>
                </div>
            </div>
          ):<div className='display-4'>Loading User Details.....</div>}
      </div>
    </>
  )
}

export default UserDetails;
