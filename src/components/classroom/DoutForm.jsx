import React from 'react'
import { ImCross } from 'react-icons/im'
import { BsPersonCircle } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import { Backdrop, Button, CircularProgress, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createAdmininfo } from '../../redux/slices/adminInfoSlices'
import { TextareaAutosize } from '@mui/base/TextareaAutosize'

import { useState } from 'react'
import Dout from '../../images/Dout.png'

const DoutForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [infoData, setInfoData] = useState({

    studentName: '',
    className: '',
    doutes: '',
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setInfoData({
      ...infoData,
      [name]: value
    })
  }


  async function createAdminInfo (event) {
    event.preventDefault()
    if (
      !infoData.studentName ||
      !infoData.className ||
      !infoData.doutes 
    ) {
      toast.error('Please fill all the details')
      return
    }


    const formData = new FormData()
    formData.append('studentName', infoData.studentName)
    formData.append('className', infoData.className)
    formData.append('doutes', infoData.doutes)

    // dispatch create account action
    const response = await dispatch(sendDout(formData))
    console.log('res>>', response)
    // if (response?.payload?.success) navigate('/admin/profile')

    setInfoData({
      studentName: '',
      className: '',
      doutes: ''
    })
  }

  return (
    <div className='w-[full] h-[90vh] flex items-center justify-center'>
      <div className='w-[80vw] h-[70vh]  mt-10 bg-slate-800 rounded-lg flex  '>
        {/* from -> */}

        <div className=' form '>
          <form
            noValidate
            onSubmit={sendDout}
            className='flex ml-20 justify-center  rounded-lg p-5 text-white  h-[70vh] w-[40vw] '
          >
            <div className='border-2  p-10 w-[40vw] h-[60vh] flex flex-col text-stone-50  gap-10'>
              <TextField
                onChange={handleUserInput}
                id='standard-basic'
                label='Enter student Name'
                variant='outlined'
                color=''
                name='studentName'
                helperText=''
                value={infoData.username}
              />

              <div className='  flex flex-col gap-1'>
                <TextField
                  onChange={handleUserInput}
                  id='standard-basic'
                  label='Enter User class'
                  variant='outlined'
                  color=''
                  name='ClassName'
                  helperText=''
                  value={infoData.ClassName}
                />
              </div>

              <div className=' flex flex-col gap-1'>
                <TextField
                  onChange={handleUserInput}

                  id='outlined-multiline-flexible'
                  label='Enter you Dout '
                  multiline
                  maxRows={4}
                  value={infoData.doutes}

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
