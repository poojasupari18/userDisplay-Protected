import React, { useContext } from 'react'
import HomePage from './HomePage'
import "./App.css"
import {Link, useNavigate}  from "react-router-dom"
import { profileContext } from './HomePage'
import { Button } from '@mui/material'
import Profile from './Profile'
import Users from "./Users"
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'
import LogOut from './LogOut'

function MainPage() {
  let navigate = useNavigate()
  // const authenticated = useContext(profileContext)

  // console.log(authenticated)
  return (
    
    
    <div className='MainPage'>
      <Box>
          <AppBar position="static">
   
      <Button  onClick={()=> navigate("/profile")}> Profile </Button>
      <Button onClick={()=> navigate ("/users")}> Users</Button>

    </AppBar>

    <LogOut />
  </Box>
        
        
        
     

      
    </div>
  )
}

export default MainPage
