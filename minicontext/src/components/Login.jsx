import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername]=useState(" ");
    const [password,setPassword]= useState("");

    const {setUser}=useContext(UserContext)

    const handlesubmit=(e)=> { 
       e.preventDefault()
       setUser({username,password})
       console.log(username,password);
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
        placeholder='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        {" "}
        <input 
        type="text" 
        placeholder='password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login