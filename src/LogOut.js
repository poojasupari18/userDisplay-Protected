import React, { useContext } from 'react'
import "./App.css"
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'
import { useNavigate } from 'react-router-dom';
import { MyContext } from './ContextProvider'
import ContextProvider from './ContextProvider';

function LogOut() {

  const { setauthfalsein , authenticated} = useContext(MyContext);
   console.log(authenticated)
  let navigate = useNavigate()

  const setauthfalse = () =>{
    setauthfalsein();
    navigate("/login")

  }
  return (
    <div>
     <Box>
          <AppBar position="static">

    </AppBar>


    <button className='logout-btn' onClick={()=> setauthfalse() }> LogOut </button>
  </Box>
    </div>
  )
}

export default LogOut
