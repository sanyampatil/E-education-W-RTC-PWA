import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import VideoConfPopup from './VideoConfPopup'
import P2pPopup from './P2pPopup'
import { useSelector } from 'react-redux'

const ClassroomOption = () => {
  const [showPopUp, setshowPopUp] = useState(false)
  const [showP2PPopUp, setshowP2PPopUp] = useState(false)

  const lightTheme = useSelector(state => state.themeKey)

  const closeahes = () => {
    setshowP2PPopUp(false)
  }

  return (
    <div className='w-full h-[90vh]'>
      <div className=' w-full h-[80vh] flex justify-center items-center  gap-10'>
        <div
          className=' w-[30%] h-[30%] bg-white shadow-xl rounded flex justify-center flex-col items-center  cursor-pointer '
          onClick={() => setshowP2PPopUp(true)}
        >
          <Link to="/class/doubt">
            {/* {showP2PPopUp && <P2pPopup closeahes={closeahes} />} */}
            <p className='text-4xl'> Dout solving class</p>

            <p className='text-2xl'>one-to-one</p>
          </Link>
        </div>
        <div
          className=' w-[30%] h-[30%] bg-white shadow-xl rounded flex justify-center flex-col  items-center  cursor-pointer '
          onClick={() => setshowPopUp(true)}
        >
          {/* {showPopUp && <VideoConfPopup onClose={closeahes} />} */}

          <p className='text-4xl'>video cnf class</p>

          <p className='text-2xl'>many -to-many </p>
        </div>
      </div>
    </div>
  )
}

export default ClassroomOption
