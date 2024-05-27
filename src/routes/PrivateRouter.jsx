import React from 'react'
import Header from '../layouts/admin/Header'
import { Navigate, Outlet } from 'react-router-dom';

function isAdmin(){
    // xuwr lys giong nhu binh 
    return true;
}

export default function PrivateRouter() {
  return (
    <>
        <Header/>
        {isAdmin() ? <Outlet /> : <Navigate to={"/"} />}
    </>
  )
}
