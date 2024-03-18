import React from 'react'
import MainClass from './MainClass'
import { SocketProvider } from '../context/Socket'

const DoubtClass = () => {
  return (
    <div>
      <SocketProvider>
        <MainClass />
      </SocketProvider>
    </div>
  )
}

export default DoubtClass
