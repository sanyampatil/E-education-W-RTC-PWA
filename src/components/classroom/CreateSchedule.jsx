import React from 'react'
import { ImCross } from 'react-icons/im'
import { BsPersonCircle } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
// import { makeStyles } from '@material-ui/core/styles'
import { Backdrop, Button, CircularProgress, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { createAdmininfo } from '../../redux/slices/adminInfoSlices'
import { TextareaAutosize } from '@mui/base/TextareaAutosize'
import { useState } from 'react'
import schedule from '../../images/schedule.png'
import { sendDout } from '../../redux/slices/classroomSlices'
import { calcLength } from 'framer-motion'
import { AdminCreateSchedule } from '../../redux/slices/dashboardSlice'

// TitleOfClass,
//   Topic_heading,
//   create_Date,
//   Time,
//   Createby,
//   adminId,

const CreateSchedule = () => {
  // const userData = JSON.parse(localStorage.getItem('userData'))
  // const userId = userData.data._id
  // console.log('userData', userData)
  // console.log("userId",userId)

  // const useStyles = makeStyles({
  //   root: {
  //     '& .MuiInputBase-input': {
  //       color: 'white', // Text color
  //     },
  //     '& .MuiInput-underline:before, & .MuiInput-underline:after': {
  //       borderBottomColor: 'white', // Border color when idle and focused
  //     },

  //     '& .MuiFormLabel-root': {
  //       color: 'white', // Label color
  //     },
  //   },
  // });

  // const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [infoData, setInfoData] = useState({
    TitleOfClass: '',
    Topic_heading: '',
    create_Date: '',
    Time: '',
    Createby: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setInfoData({
      ...infoData,
      [name]: value
    })
  }
  // console.log('infoData', infoData)

  if (
    !infoData.TitleOfClass ||
    !infoData.Topic_heading ||
    !infoData.create_Date ||
    !infoData.Time ||
    !infoData.Createby
  ) {
    toast.error('All required')
    return
  }

  async function submitscheduleForm (event) {
    event.preventDefault()
    // if (!infoData.TitleOfClass || !infoData.Topic_heading || !infoData.create_Date) {
    //   toast.error('Please fill all the details')
    //   return
    // }

    const formData = new FormData()
    formData.append('TitleOfClass', infoData.TitleOfClass)
    formData.append('Topic_heading', infoData.Topic_heading)
    formData.append('create_Date', infoData.create_Date)
    formData.append('Time', infoData.Time)
    formData.append('Createby', infoData.Createby)

    // formData.append('_id', userId)

    // dispatch create account action

    const response = await dispatch(AdminCreateSchedule(formData))
    console.log('res>>', response)
    // if (response?.payload?.success) navigate('/admin/profile')

    if (response?.payload?.success) {
      navigate('/my-doubts')
    }

    setInfoData({
      TitleOfClass: '',
      Topic_heading: '',
      create_Date: '',
      Time: '',
      Createby: ''
    })
  }

  return (
    <div className='w-[80vw] h-[90vh]   flex   p-10  shadow-lg rounded-lg '>
      <div className='  bg-slate-900 rounded-lg flex w-full h-[80vh] '>
        {/* from -> */}

        <div className=' form '>
          <form
            noValidate
            onSubmit={submitscheduleForm}
            className='flex ml-20 justify-center  rounded-lg p-2 text-white  h-[83vh] w-[37vw]  m-5 
              bg-slate-700 '
          >
            <div className='p-2 w-[40vw] h-[60vh] flex flex-col text-stone-50  gap-5'>
              <h1 className='text-[1.7rem]'>please fill all information</h1>

              <div className='  flex flex-col gap-1'>
                {/* <input
                  type='text'
                  required
                  name='TitleOfClass'
                  id='TitleOfClass'
                  placeholder='Enter your TitleOfClass..'
                  className='bg-transparent px-2 py-1 border'
                  onChange={handleUserInput}
                  value={infoData.TitleOfClass}
                />{' '} */}

                <TextField
                  type='text'
                  required
                  id='standard-basic'
                  label='Enter Title Of Class..'
                  variant='outlined'
                  color='primary'
                  InputProps={{
                    style: { color: 'white' }
                  }}
                  name='TitleOfClass'
                  onChange={handleUserInput}
                  value={infoData.TitleOfClass}
                />
              </div>
              <div className=' flex flex-col gap-1'>
                <TextField
                  type='text'
                  required
                  id='standard-basic'
                  label='Enter your Topic Heading..'
                  variant='outlined'
                  // color='primary'
                  // className={classes.root}
                  InputProps={{
                    style: { color: 'white' }
                  }}
                  name='Topic_heading'
                  onChange={handleUserInput}
                  value={infoData.Topic_heading}
                />
              </div>

              <div className=' flex flex-col gap-1'>
                <TextField
                  type='date'
                  required
                  id='standard-basic'
                  label='Enter Date..'
                  variant='outlined'
                  // color='primary'
                  // className={classes.root}
                  InputProps={{
                    style: { color: 'white' }
                  }}
                  name='create_Date'
                  onChange={handleUserInput}
                  value={infoData.create_Date}
                />
              </div>

              <div className=' flex flex-col gap-1'>
                <TextField
                  type='time'
                  required
                  id='standard-basic'
                  label='Enter your TitleOfClass..'
                  variant='outlined'
                  // color='primary'
                  // className={classes.root}
                  InputProps={{
                    style: { color: 'white' }
                  }}
                  name='Time'
                  placeholder='Enter your Time..'
                  onChange={handleUserInput}
                  value={infoData.Time}
                />
              </div>
              <div className=' flex flex-col gap-1'>
                <TextField
                  type='text'
                  required
                  id='standard-basic'
                  label='Enter your intructor name..'
                  variant='outlined'
                  // color='primary'
                  // className={classes.root}
                  InputProps={{
                    style: { color: 'white' }
                  }}
                  name='Createby'
                  onChange={handleUserInput}
                  value={infoData.Createby}
                />
              </div>
              <button
                type='submit'
                className=' bg-blue-900  rounded-lg text-white  p-3  font-semibold text-lg cursor-pointer'
              >
                create Schedule
              </button>
            </div>
          </form>
        </div>

        {/* img */}

        <div className=' w-[100%] h-[50vh] '>
          <img
            src={schedule}
            alt='Logo'
            className='  w-[100vw] h-[70vh] brightness-50   '
          />
        </div>
      </div>
    </div>
  )
}

export default CreateSchedule
