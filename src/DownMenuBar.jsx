import React from 'react'
import { Link } from 'react-router-dom'
import { FaPenToSquare } from 'react-icons/fa6'
import { SiGoogleclassroom } from 'react-icons/si'
import { AiOutlineHome } from 'react-icons/ai'
import { MdGroupAdd } from 'react-icons/md'
  

const DownMenuBar = () => {
  return (
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
  )
}

export default DownMenuBar
