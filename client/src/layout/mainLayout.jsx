import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function MainLayout() {
  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default MainLayout