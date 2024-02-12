import React  from 'react'
import { useNavigate } from 'react-router-dom'
import VideoConfPopup from './VideoConfPopup'
const Classroom = () => {
  // const navigate = useNavigate()
  return (
    <div className='w-full h-screen'>
      <div className=' w-full h-screen flex justify-center items-center  gap-10'>
        <div
          className=' w-[30%] h-[30%] bg-white shadow-xl rounded flex justify-center flex-col items-center  cursor-pointer '
          
        >
          <p className='text-4xl'>Dout solving class</p>

          <p className='text-2xl'>one-to-one</p>
        </div>
        <div className=' w-[30%] h-[30%] bg-white rounded '></div>

        <div></div>
      </div>
    </div>
  )
}

export default Classroom
