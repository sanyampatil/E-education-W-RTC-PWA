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
      <div className=' w-full h-[80vh] flex justify-center items-center pt-20  gap-10'>
        <Link to='/class/doubt'>
          <div
            className=' w-[40vw] h-[40vh] bg-white shadow-xl rounded flex justify-center flex-col items-center  cursor-pointer '
            onClick={() => setshowP2PPopUp(true)}
          >
            <div className='flex absolute top-1 right-2 '>
              <div className='h-4 w-4 rounded-full bg-gray-900'></div>
            </div>
            {/* {showP2PPopUp && <P2pPopup closeahes={closeahes} />} */}
            <p className='text-[3rem] font-bold'> Doubt solving class</p>

            <p className='text-2xl'>one-to-one</p>
          </div>
        </Link>
        <div
          className='w-[40vw] h-[40vh] bg-white shadow-xl rounded flex justify-center flex-col  items-center  cursor-pointer  relative'
          onClick={() => setshowPopUp(true)}
        >
          <div className='flex absolute top-1 right-2 '>
            <div className='h-4 w-4 rounded-full bg-gray-900'></div>
          </div>
          {showPopUp && <VideoConfPopup onClose={closeahes} />}

          <p className='text-[3rem] font-bold'>video cnf class</p>

          <p className='text-2xl text-left'>many-to-many </p>
          <div className='flex '>
            {/* <button className=' bg-blue-600 px-5 py-2 text-white rounded-md '>
              start
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassroomOption
