import React, { useContext } from 'react'
import { MyContext } from './ContextProvider'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import LogOut from './LogOut';



function Profile() {
  const { defaultUsers} = useContext(MyContext)
  console.log(defaultUsers)
  
    
   
  return (
  
  <Box>
          <AppBar position="static">
    <h1>{defaultUsers.username}</h1>
    </AppBar>
    <LogOut />

  </Box>
  
    
  )
}

export default Profile
