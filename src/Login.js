import React, { useContext, useState } from 'react'
import HomePage from './HomePage'
import { MyContext } from './ContextProvider'
import MainPage from './MainPage'
import { useNavigate } from 'react-router-dom'


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
        <h3> Login Page</h3>
        <form className='login-form' onSubmit={onsubmit}>
            <input  type="username"   onChange={(e)=> setUsername(e.target.value)}/> <br/>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} /> <br/>
            <input type="submit" /> 

        </form>
       {authenticated &&  navigate("/mainpage")}
    </div>
  )
}

export default Login
