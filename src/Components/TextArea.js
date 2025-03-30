import React, { useState } from 'react'

const TextArea = () => {
    const [textarea, setTextArea] = useState('')
    const handleChange = (e) =>{
        setTextArea(e.target.value)
    }

  return (
    <>
      <form>
        <textarea rows={10} cols={40} placeholder='Please write your Address' value={textarea} onChange={handleChange}></textarea>
      </form>
    </>
  )
}

export default TextArea
