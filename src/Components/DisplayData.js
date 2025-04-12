import React from 'react'

const DisplayData = ({data}) => {
  return (
    <>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </>
  )
}

export default DisplayData
