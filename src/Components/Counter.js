import { useReducer } from "react"

const initialState = {count: 0}

function Reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        case 'RESET':
            return initialState
        default:
            throw new Error('Unknown action type')
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={()=>dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={()=>dispatch({type: 'DECREMENT'})}>Decrement</button>
      <button onClick={()=>dispatch({type: 'RESET'})}>Reset</button>
    </>
  )
}

export default Counter
