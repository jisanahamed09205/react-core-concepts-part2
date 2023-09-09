import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('button clicked 2')
  }
  const addToFive =(num)=>{
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{alert('third time clicked')}}>Third</button>
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
