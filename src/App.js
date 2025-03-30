import React from 'react'
import Form from './Components/Form'
import MultipleFieldForm from './Components/MultipleFieldForm'
import TextArea from './Components/TextArea'
import Select from './Components/Select'
import RadioButton from './Components/RadioButton'

const App = () => {
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
    </>
  )
}

export default App
