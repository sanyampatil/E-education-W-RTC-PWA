import React, { useState } from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import WorkArea from './WorkArea'
function MainContainer () {
  return (
    <>
      <div className=' mt-[9vh] main-container'>
      <Sidebar/>
      <WorkArea/>
      </div>
    </>
  )
}

export default MainContainer
