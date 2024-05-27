import React from 'react'
import Header from '../../layouts/user/Header'
import { Outlet } from 'react-router-dom'

export default function UserIndex() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}
