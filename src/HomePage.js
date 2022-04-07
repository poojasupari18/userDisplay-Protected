import React, { useContext } from 'react'
import Login from './Login'
import MainPage from './MainPage'
import {useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createContext } from "react";
import "./App.css"
import Profile from './Profile';
// export const profileContext =  createContext([]);
import ContextProvider from './ContextProvider';
import MainRouter from "./MainRouter"
import { MyContext } from './ContextProvider';
import { Button } from '@mui/material';


function HomePage() {

//  const  calllogin = (e)=>{
//    return <div>
     
//      <Login  />
//      </div>
          
//   }
  
    
  return  (
    <div className='homepage'>
        <h1 className='homepage-header'>Home Page</h1>
      <Button className='homepage-loginbtn'> <Link to = "/login">Login</Link></Button>
      
    </div>
  ) 
}

export default HomePage
