import React, { useState } from 'react'

const Select = () => {
    const [state,setState] =  useState('')
    const handleChange = (e) =>{
        setState(e.target.value)
    }
  return (
    <>
      <select value={state} onChange={handleChange}>
        <option>Select</option>
        <option value='Delhi'>Delhi</option>
        <option value='Haryana'>Haryana</option>
        <option value='Bihar'>Bihar</option>
        <option value='UP'>UP</option>
        <option value='Uttarakhand'>Uttarakhand</option>
        <option value='Punjab'>Punjab</option>
      </select>
    </>
  )
}

export default Select
