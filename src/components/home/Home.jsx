import React from 'react'
import { FaPenToSquare } from 'react-icons/fa6'
import { SiGoogleclassroom } from 'react-icons/si'
import { AiOutlineHome } from 'react-icons/ai'
import { MdGroupAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Typewriter from 'typewriter-effect'

const Home = () => {
  const adminIslogin = useSelector(state => state?.adminAuth?.adminIslogin)
  //  console.log("adminIslogin",adminIslogin)
  const lightTheme = useSelector(state => state.themeKey)
  console.log("theme",lightTheme)

  return (
    <>
      <div
        className={
          ' text-[14.1rem] absolute   top-40  left-28  font-bold  text-gray-100 ' +
          (lightTheme ? '' : ' text-gray-800')
        } 
      >
        Edu+Collab
      </div>

      <div className='w-[100%] h-[91vh] flex justify-evenly items-center gap-4'>
      {/* left box */}
        <div
          className=
            ' relative w-[42vw] h-[70vh] shadow-lg shadow-indigo-500/40   border-1 border-white  ml-7 mt-[70px]' 
            
        >
          {adminIslogin && (
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
        {/* //right box */}

        <div className=' w-[50%] h-[80vh] mt-32  relative'>
          <div className='relative '>
            <div
              className={
                ' leading-none text-[7.7rem] mt-5 text-unwrap  text-black  font-bold' +
                (lightTheme ? '' : ' text-white')
              }
            >
              <h1 className=' text-blue-700'>E-eduction </h1>
              <h1>and video </h1>
              <h1>chat app</h1>
            </div>
            <div
              className={
                'text-4xl ml-4 text-gray-400   ' +
                (lightTheme ? '' : 'text-gray-600')
              }
            >
              <Typewriter
                options={{
                  strings: [
                    'The video chat',
                    'The group chat app',
                    'the notes creating '
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: '',
                  wrapperClassName: 'typewriterpara'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
