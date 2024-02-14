import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VideoConfPopup from './VideoConfPopup'
import P2pPopup from './P2pPopup'
const Classroom = () => {
  
const [showPopUp, setshowPopUp] = useState(false)
const [showP2PPopUp, setshowP2PPopUp] = useState(false)
  return (
    <div className='w-full h-screen'>
      <div className=' w-full h-screen flex justify-center items-center  gap-10'>
        <div className=' w-[30%] h-[30%] bg-white shadow-xl rounded flex justify-center flex-col items-center  cursor-pointer ' onClick={()=>setshowP2PPopUp(true)} >

        {showP2PPopUp && <P2pPopup onClose={() => setshowP2PPopUp(false)} />}

          <p className='text-4xl'> Dout solving class</p>

          <p className='text-2xl'>one-to-one</p>
        </div>
        <div className=' w-[30%] h-[30%] bg-white shadow-xl rounded flex justify-center flex-col  items-center  cursor-pointer ' onClick={()=> setshowPopUp(true)}>

        {showPopUp && <VideoConfPopup onClose={() => setshowPopUp(false)} />}
        
          <p className='text-4xl'>video cnf class</p>

          <p className='text-2xl'>one-to-one</p>
        </div>
      </div>
    </div>
  )
}

export default Classroom
