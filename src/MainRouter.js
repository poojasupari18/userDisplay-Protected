import React, { useContext } from 'react'
import {Routes , Route , BrowserRouter as Router} from "react-router-dom"
import HomePage from './HomePage'
import Login from './Login'
import MainPage from './MainPage'
import Profile from './Profile'
import Users from './Users'
import ProtectedRoute from './ProtectedRoute'
import {MyContext} from "./ContextProvider"

function MainRouter() {
  const {authenticated } = useContext(MyContext);
  // console.log(authenticated)
  return (
    <div>
      <Router>
        <Routes>
            <Route  path = "/" element = {<HomePage />}/>   
            <Route  path = "/login" element = {<Login />} />   
            <Route   path = "/mainpage" element = {<MainPage />}/>
            {/* <Route  >
               <ProtectedRoute exact path = "/Users"   isauth = {false} element = {<Users />} />
               </Route> */}
            <Route  path="/"  element={<ProtectedRoute isauth={authenticated}   />} >
                <Route  path="/users" element={<Users />} />
                <Route  path = "/profile" element = {<Profile />}/>
            </Route>
        </Routes>
        </Router>
    </div>
  )
}

export default MainRouter
