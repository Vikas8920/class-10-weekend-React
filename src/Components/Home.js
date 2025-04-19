import React from 'react'

const Home = () => {
    const myStyle = {
        backgroundColor: 'yellow',
        color:'black',
        fontSize: '20px',
        textAlign: 'center'
    }
  return (
    <div>
      <h1 style={{backgroundColor:'red', color:'blue'}}>Home page</h1>
      <h2 style={myStyle}>Welcome To Our React Application</h2>
    </div>
  )
}

export default Home
