import React from 'react'
import { Routes , Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import AdminMember from '../pages/AdminMember';
import AddUser from '../pages/AddUser';
import AddUserDetail from '../pages/AddUserDetail';
import Login from '../pages/Login';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/admin-member" element={<AdminMember/>}/> 
        <Route path="/add-user" element={<AddUser/>}/> 
        <Route path="/add-user-details-form/:userid" element={<AddUserDetail/>}/> 
    </Routes>
  )
}

export default AllRoutes