import React, { useState } from 'react'
import Form from './Components/Form'
import MultipleFieldForm from './Components/MultipleFieldForm'
import TextArea from './Components/TextArea'
import Select from './Components/Select'
import RadioButton from './Components/RadioButton'
import Checkbox from './Components/Checkbox'
import DisplayForm from './Components/DisplayForm'
import DisplayData from './Components/DisplayData'
import AnotherForm from './Components/AnotherForm'

const App = () => {
  const [formData, setFormData] = useState(null)

  const handleFormSubmit = (data) =>{
    setFormData(data)
  }
  return (
    <>
      <Form/>
      <hr/>
      <MultipleFieldForm/>
      <hr/>
      <TextArea/>
      <hr/>
      <Select/>
      <hr/>
      <RadioButton/>
      <hr/>
      <Checkbox/>
      <hr/>
      <DisplayForm onFormSubmit={handleFormSubmit}/>
      {formData && <DisplayData data={formData}/>}

      {/* if formData exists, render the displayData component */}

      <hr/>
      <AnotherForm/>
    </>
  )
}

export default App
