import React from 'react'

import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Typewriter from 'typewriter-effect'
import DownMenuBar from '../../DownMenuBar'
const Home = () => {
  const adminIslogin = useSelector(state => state?.adminAuth?.adminIslogin)
  //  console.log("adminIslogin",adminIslogin)
  const lightTheme = useSelector(state => state.themeKey)
  console.log('theme', lightTheme)

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
        <div className=' relative w-[42vw] h-[70vh] shadow-lg shadow-indigo-500/40   border-1 border-white  ml-7 mt-[70px]'>
          {adminIslogin && <DownMenuBar />}
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
