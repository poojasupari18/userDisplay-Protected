import React, { useContext, useState } from 'react'
import HomePage from './HomePage'
import { MyContext } from './ContextProvider'
import MainPage from './MainPage'
import { useNavigate } from 'react-router-dom'
import "./Login.css"


function Login( ) {
  let navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

 const {onlogin , authenticated} = useContext(MyContext);
    const onsubmit = (e)=>{
        e.preventDefault();
      
         onlogin(username,password)
        
}
  return (
    <div className='login'>
        <h2> Login Page</h2>
        <p className='login-text'> <br/>User : Admin  <br/> Password : Admin@123 </p>
        <form className='login-form' onSubmit={onsubmit}>
            <input  type="username"  placeholder='Enter Username'  onChange={(e)=> setUsername(e.target.value)}/> <br/>
            <input type="password" placeholder='Enter Password' onChange={(e)=> setPassword(e.target.value)} /> <br/>
            <input  className = "login-submit"type="submit" /> 

        </form>
       {authenticated &&  navigate("/mainpage")}
    </div>
  )
}

export default Login
