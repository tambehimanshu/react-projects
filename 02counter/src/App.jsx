import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);

 const addValue = ()=>{
  counter=counter+1
  console.log("clicked",counter);
  setCounter(counter);

  
  
 }
 const removeValue=()=>{
  if(counter>0){
    counter =counter-1;
    console.log("count remove is clicked")
    setCounter(counter)
  }
 }
  return (
    <>
     <h1>React basic code </h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>AdValue </button>
     <br />
     <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
