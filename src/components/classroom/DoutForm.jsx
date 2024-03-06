import React from 'react'
import { ImCross } from 'react-icons/im'
import { BsPersonCircle } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import { Backdrop, Button, CircularProgress, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { createAdmininfo } from '../../redux/slices/adminInfoSlices'

import { TextareaAutosize } from '@mui/base/TextareaAutosize'
import { useState } from 'react'
import Dout from '../../images/Dout.png'
import { sendDout } from '../../redux/slices/classroomSlices'
import { calcLength } from 'framer-motion'

const DoutForm = () => {
  const userData =JSON.parse( localStorage.getItem('userData'))
  const userId = userData.data._id
  // console.log('userData', userData)
  // console.log("userId",userId)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [infoData, setInfoData] = useState({
    studentName: '',
    class_name: '',
    doubt: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setInfoData({
      ...infoData,
      [name]: value
    })
  }
  console.log('infoData', infoData)

  async function submitDoutForm (event) {
    event.preventDefault()
    // if (!infoData.studentName || !infoData.class_name || !infoData.doubt) {
    //   toast.error('Please fill all the details')
    //   return
    // }

    const formData = new FormData()
    formData.append('studentName', infoData.studentName)
    formData.append('class_name', infoData.class_name)
    formData.append('doubt', infoData.doubt)
    formData.append('_id',userId)

    // dispatch create account action

    const response = await dispatch(sendDout(formData))
    console.log('res>>', response)
    // if (response?.payload?.success) navigate('/admin/profile')

    setInfoData({
      studentName: '',
      class_name: '',
      doubt: ''
    })
  }

  return (
    <div className='w-[full] h-[90vh] flex items-center justify-center'>
      <div className='w-[80vw] h-[70vh]  mt-10 bg-slate-800 rounded-lg flex  '>
        {/* from -> */}

        <div className=' form '>
          <form
            noValidate
            onSubmit={submitDoutForm}
            className='flex ml-20 justify-center  rounded-lg p-10 text-white  h-[70vh] w-[40vw]  m-5 
              bg-slate-700 '
          >
            <div className='border-2  p-5  w-[40vw] h-[60vh] flex flex-col text-stone-50  gap-5'>
              <h1 className='text-[1.7rem]'>please fill all information</h1>

              <div className='  flex flex-col gap-1'>
                <input
                  type='text'
                  required
                  name='studentName'
                  id='studentName'
                  placeholder='Enter your studentName..'
                  className='bg-transparent px-2 py-1 border'
                  onChange={handleUserInput}
                  value={infoData.studentName}
                />{' '}
              </div>
              <div className=' flex flex-col gap-1'>
                <input
                  type='text'
                  required
                  name='class_name'
                  id='class_name'
                  placeholder='Enter your class_name..'
                  className='bg-transparent px-2 py-1 border'
                  onChange={handleUserInput}
                  value={infoData.class_name}
                />
              </div>

              <div className=' flex flex-col gap-1'>
                <input
                  type='text'
                  required
                  name='doubt'
                  id='doubt'
                  placeholder='Enter your doubt..'
                  className='bg-transparent px-2 py-1 border'
                  onChange={handleUserInput}
                  value={infoData.doubt}
                />
              </div>
              <button
                type='submit'
                className=' bg-blue-900  rounded-lg text-white  p-3  font-semibold text-lg cursor-pointer'
              >
                submit
              </button>
            </div>
          </form>
        </div>

        {/* img */}

        <div className=' w-[100%] h-[50vh] '>
          <img
            src={Dout}
            alt='Logo'
            className='  w-[100vw] h-[70vh] brightness-50   '
          />
        </div>
      </div>
    </div>
  )
}

export default DoutForm
