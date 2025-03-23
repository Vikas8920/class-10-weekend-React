import React, { Component } from 'react'
import Logger from './Components/Logger'
import Counter from './Components/Counter'
import Button from './Components/Button'
import Garrage from './Components/Garrage'
import Football from './Components/Football'
import KeyPress from './Components/KeyPress'
import Garrage2 from './Components/Garrage2'

export default class App extends Component {
  render() {
    return (
      <>
        <Logger/>
        <hr/>
        <Counter/>
        <hr/>
        <Button name={'Submit'}/>
        <hr/>
        <Garrage/>
        <hr/>
        <Football/>
        <hr/>
        <KeyPress/>
        <hr/>
        <Garrage2/>
      </>
    )
  }
}
