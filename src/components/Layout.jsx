import React from 'react'
import ApiFetch from './ApiFetch'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout