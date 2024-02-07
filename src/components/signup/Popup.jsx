import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  admineRegister,
  studentRegister
} from '../../redux/slices/registerSlices'

const SignupPopUp = ({ onClose }) => {
  const AdminRegister = useSelector(state => state.register.admineRegister)
  const StudentRegister = useSelector(state => state.register.admineRegister)
const dispatch =useDispatch(admineRegister())

  return (
    <div className='   bg-opacity-30 inset-0 backdrop-blur-sm fixed flex justify-center items-center bg-black'>
      <div className=' flex flex-col gap-5 text-white relative'>
        <div className='absolute right-0 m-2  text-black'>
          <ImCross onClick={onClose} />
          <div className=''></div>
        </div>
        <div className='bg-white h-[40vh] w-[70vh] rounded-xl  text-black'>
          <h1 className='text-[25px]  mt-10 font-bold text-black'>
            Select following option for Registration
          </h1>

          <ul className=' flex  items-center justify-center gap-10 mt-[20%] '>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <Link onClick={onClose} to='/admin/signup'>
                Admin
              </Link>
            </button>

            <button
            onClick={()=>{
              dispatch()
            }}
              type='button'
              className='  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <Link onClick={onClose} to='/student/signup'>
                {' '}
                Student
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default SignupPopUp
