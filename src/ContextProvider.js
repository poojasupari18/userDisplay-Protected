import React from 'react'
import HomePage from './HomePage'
import MainPage from './MainPage'
import Login from "./Login"

import {createContext , useState} from "react"
export const MyContext = React.createContext()
function ContextProvider(   {children}  ) {
    const [authenticated , setAuthenticated] = useState(false)
    const [defaultUsers , setDefaultUsers] = useState([])
    

    const onlogin = (username , password)=>{
    
        console.log(username , password)
        if ( username === "pooja" && password === "supari"){
               setAuthenticated(true)
               setDefaultUsers({username:"pooja" , password:"supari"})
               console.log("reached")
        }
 
 } 

  return (
    <div>
        <MyContext.Provider value = {{onlogin , authenticated  , defaultUsers}}>
            {children}       
        </MyContext.Provider>
         
           

      
    </div>
  )
}

export default ContextProvider