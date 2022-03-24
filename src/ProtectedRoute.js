import React from 'react'
import {Route ,Routes, Navigate, Outlet} from "react-router-dom"
import HomePage from './HomePage'


function ProtectedRoute({isauth } ) {
  
    // console.log(isauth)
    return isauth ?  <Outlet /> : <HomePage/>
//   return (
//     <div>
//  <Routes >
//     <Route  {...rest} render={ (props)=>{
//          if(isauth)  return  <Component />  
        
//          else return ( <div>
//              <Navigate  to = "/"/>
             
//              </div>
//          );
         

//     }}  />
//     </Routes>
      
//     </div>
//   )
}

export default ProtectedRoute
