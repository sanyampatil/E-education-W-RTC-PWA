import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Home from '../home/Home'
export const Layout = () => {
  return (
    <>
    <div className='bg-gradient-to-r  from-blue-300  relative '>

      <Header />
      <Home />
      <Footer />
    </div>
    </>
  )
}

export default Layout
