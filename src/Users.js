import React, { useState , useEffect, useContext} from 'react'
import axios from 'axios'
import  {AgGridReact , AgGridColumn } from "ag-grid-react"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "./App.css"
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'
import { MyContext } from './ContextProvider';


function Users() {
     useEffect(()=>{
        fetchUsers()

    },[])
    const {defaultUsers}= useContext(MyContext)
    const [newusers , setnewusers] = useState([])

   const fetchUsers = async () =>{
       let res = await(axios.get("https://jsonplaceholder.typicode.com/users"))
       setnewusers(res.data)
   }
   
   
   

  return (
    <div className='users'> 

    <Box>
          <AppBar position="static">
    <h2>User : {defaultUsers.username}</h2>
    </AppBar>
  </Box>
   
<div className="ag-theme-alpine" style={{height: 500, width: 1000 }}>
   <AgGridReact rowData = {(newusers).map((x) => ({ 'id': x.id, 'name' : x.name , 'email': x.email , 'company': x.company}))}>
      
       <AgGridColumn field="id"></AgGridColumn>
      <AgGridColumn field="name"></AgGridColumn>
      <AgGridColumn field="email"></AgGridColumn>
      <AgGridColumn field="company"></AgGridColumn>
   </AgGridReact>
   </div> 
    </div>
  )
}

export default Users
