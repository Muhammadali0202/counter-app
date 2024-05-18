import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 0;
  const [count, setCount] = useState(0)
 function resetHandler(){
  setCount(0)
 }
 function incrementHandler(){
  setCount(count + 1)
 }
 function decrementHandlet(){
  setCount(count - 1)
 }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={resetHandler}>reset</button>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandlet}>decrement</button>
    </>
  )
}

export default App
