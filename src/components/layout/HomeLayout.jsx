import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import { useSelector } from 'react-redux'

export const Layout = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <>
    <div className={' relative '  + (lightTheme ? "" : "dark-layout")}>

      <Header />
      <Outlet/>
      {/* <Home/> */}
      <Footer />
    </div>
    </>
  )
}

export default Layout
