import React from 'react'
import { FaPenToSquare } from 'react-icons/fa6'
import { SiGoogleclassroom } from 'react-icons/si'
import { AiOutlineHome } from 'react-icons/ai'
import { MdGroupAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-[100%] h-[92vh] flex justify-evenly items-center gap-4'>
      <div className='  relative w-[45%] h-[80vh] shadow-lg shadow-indigo-500/40  border-2  ml-9 mt-[50px]'>
        <div
          className='  p-10 rounded-lg bg-white text-black  flex items-center  justify-evenly gap-10 absolute left-[100px] bottom-[10%] w-[70%] h-[50px] 
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

          {/* </div> */}
        </div>
      </div>

      <div className=' w-[40%] h-[80vh] mt-32'>
        <div>
          <h1 className='text-[5.1rem] text-blue-900  font-bold'>
            The E-eduction and video chat application
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home
