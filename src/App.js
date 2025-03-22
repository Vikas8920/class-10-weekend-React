// import './App.css';
// import HelloWorld from './Components/HelloWorld';
// import Conditional from './Conditional';


// function App() {
//   let num1 = 5
//   let num2 = 5

//   return (
//    <>
//      <h1 className='heading'>React is {num1 + num2} times better with JSX</h1>
//      <hr/>
//      <br/>
//      <Conditional/>
//      <hr/>
//      <HelloWorld name={'Vikas'}/>
//      <hr/>
//      <HelloWorld name={'Shruti'}/>
     
//    </>
//   );
// }

// export default App;


import React, { Component } from 'react'
import Greeting from './Components/Greeting'
import Counter from './Components/Counter'
import Counter2 from './Components/Counter2'

export default class App extends Component {
  render() {
    return (
      <>
        <Greeting name='Vikas'/>
        <Greeting name='Shruti'/>
        <hr/>
        <Counter/>
        <hr/>
        <Counter2/>
      </>
    )
  }
}

