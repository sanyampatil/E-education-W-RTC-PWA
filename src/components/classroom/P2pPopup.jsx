import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import {
//   admineRegister,
//   studentRegister
// } from '../../redux/slices/registerSlices'

const P2pPopup = ({ closeahes }) => {
  console.log(closeahes)
  // const AdminRegister = useSelector(state => state.register.admineRegister)
  // const StudentRegister = useSelector(state => state.register.admineRegister)
  // const dispatch = useDispatch(admineRegister())

  return (
    <div className='bg-opacity-30 inset-0 backdrop-blur-sm fixed flex justify-center items-center bg-black'>
      <div className=' flex flex-col gap-5 text-white relative'>
        <div className='absolute right-0 m-2  text-black'>
          <ImCross onClick={closeahes} />
          <div className=''></div>
        </div>
        <div className='flex justify-center items-center flex-col bg-white h-[40vh] w-[70vh] rounded-xl  text-black'>
          <h1 className='text-[25px]  mt-10 font-bold text-black '>
            fill information
          </h1>

          <div className='flex flex-col'>
            <label htmlFor=''>Email</label>
            <input
              type='text'
              name=''
              id=''
              className='p-2 border-2 w-[100%]'
              placeholder='Enter the Email'
            />
            <label htmlFor=''>Email</label>

            <input
              type='text'
              name=''
              id=''
              className='p-2 border-2 w-[100%]'
              placeholder='Enter room Code'
            />
            <button className='p-3 rounded mt-3 bg-blue-700 ' >go to</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default P2pPopup
