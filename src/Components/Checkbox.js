import React, { useState } from 'react'

const Checkbox = () => {
    const [selectedOption, setSelectedOption] = useState({
        option1: false,
        option2: false,
        option3: false
    })
    const handleChange = (e) =>{
        const {name, checked} = e.target
        setSelectedOption({...selectedOption, [name]:checked})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Selected option: ', selectedOption)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='1'>Option1</label>
        <input type='checkbox' name='option1' checked={selectedOption.option1} onChange={handleChange} id='1'/>
        <br/>
        <label htmlFor='2'>Option2</label>
        <input type='checkbox' name='option2' checked={selectedOption.option2} onChange={handleChange} id='2'/>
        <br/>
        <label htmlFor='3'>Option3</label>
        <input type='checkbox' name='option3' checked={selectedOption.option3} onChange={handleChange} id='3'/>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Checkbox
