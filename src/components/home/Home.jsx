import React from 'react'
import { FaPenToSquare } from 'react-icons/fa6'
import { SiGoogleclassroom } from 'react-icons/si'
import { AiOutlineHome } from 'react-icons/ai'
import { MdGroupAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  //
  const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn)
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className='w-[100%] h-[92vh] flex justify-evenly items-center gap-4' >
      <ToastContainer />

      <div className={' relative w-[45%] h-[80vh] shadow-lg shadow-indigo-500/40  border-2  ml-9 mt-[50px]'  + (lightTheme ? "" : " dark")}>
        {isLoggedIn && (
          <div
            className='  shadow-lg shadow-indigo-500/50  p-10 rounded-lg bg-white text-black  flex items-center  justify-evenly gap-10 absolute left-[100px] bottom-[10%] w-[70%] h-[50px]  
        '
          >
            <Link to='/'>
              <AiOutlineHome className='text-[50px]' />
            </Link>

            <Link to='/community'>
              <SiGoogleclassroom className='text-[50px]' />
            </Link>

            <Link to='/classroom'>
              <MdGroupAdd className='text-[50px]' />
            </Link>

            <Link to='/notes'>
              <FaPenToSquare className='text-[42px]' />
            </Link>
          </div>
            )}
      </div>

      <div className=' w-[50%] h-[80vh] mt-32'>
        <div>
          <div className={' leading-none text-[8.7rem] mt-5 text-unwrap text-blue-900  font-bold'  + (lightTheme ? "" : " text-white")}>
            <h1 className=''>E-eduction </h1>
            <h1>and video </h1>
            <h1>chat app</h1>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Home
