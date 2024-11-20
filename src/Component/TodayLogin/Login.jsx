import React, { useState } from 'react'
import "./Login.css"
// import { useNavigate } from 'react-router-dom'

const Assaign = () => {
    const [username ,setUsername] =useState("")
    const [password ,setPassword] = useState("")
    // const navigate = useNavigate();
    const condition = {
        username: "admin",
        password: "12"
    }
    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    
    const handleLogin = () =>{
        if(condition.username === username && condition.password === password){
            // navigate("/home")
    }
        else
            {alert("Invalid Username or Password")}
    }
  return (
    
       <div className='form1'>
      <h1 className='head'>Log In</h1>
      <form onSubmit={handleLogin}>
        <div className='edit'>
          <div className='h'>
        <label>UserName :</label>
        <input type="text" onChange={handleUsername} value={username} /></div>
        <div className='h'>
        <label>Address :</label>
        <input type="text" /></div>
        <div className='h'>
        <label>Email :</label>
        <input type='email'/></div>
        <div className='h'>
        <label>Password :</label>
        <input type='password' onChange={handlePassword} value={password}></input> </div>
        <button  type='submit'>Login</button>
        </div>
        
      </form>
    </div>
  
  )
}

export default Assaign
