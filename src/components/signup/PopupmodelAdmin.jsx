import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { BsPersonCircle } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import { Backdrop, Button, CircularProgress, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createAdmininfo } from '../../redux/slices/adminInfoSlices'

// import { TransitionProps } from '@mui/material/transitions';
const PopupmodelAdmin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [previewImage, setPreviewImage] = useState('')
  const adminId = useSelector(state => state.adminAuth.data._id)

  const [infoData, setInfoData] = useState({
    fullName: '',
    branch: '',
    subs: '',
    avatar: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setInfoData({
      ...infoData,
      [name]: value
    })
  }

  function getImage (event) {
    event.preventDefault()
    // getting the image
    const uploadedImage = event.target.files[0]

    if (uploadedImage) {
      setInfoData({
        ...infoData,
        avatar: uploadedImage
      })
      const fileReader = new FileReader()
      fileReader.readAsDataURL(uploadedImage)
      fileReader.addEventListener('load', function () {
        setPreviewImage(this.result)
      })
    }
  }

  async function createAdminInfo (event) {
    event.preventDefault()
    if (
      !infoData.fullName ||
      !infoData.branch ||
      !infoData.subs ||
      !infoData.avatar
    ) {
      // alert('plz fill all details')
      toast.error('Please fill all the details')
      return
    }

    // checking name field length

    const formData = new FormData()
    formData.append('fullName', infoData.fullName)
    formData.append('branch', infoData.branch)
    formData.append('subs', infoData.subs)
    formData.append('avatar', infoData.avatar)
    formData.append('adminId', adminId)

    // dispatch create account action
    const response = await dispatch(createAdmininfo(formData))
    console.log(' res>>', response)
    if (response?.payload?.success) navigate('/admin/profile')

    setInfoData({
      fullName: '',
      branch: '',
      subs: '',
      avatar: ''
    })
    setPreviewImage('')
  }

  return (
    <>
      <div className=' bg-opacity-30 inset-0 backdrop-blur-sm fixed flex justify-center items-center bg-black'>
        <div className='  flex flex-col gap-5 text-white relative'>
          <div className='  mt-10 bg-white h-[80vh] w-[70vw] rounded-xl  text-black'>
            <h1 className='text-[25px]  text-center mt-2 font-bold text-black'>
              Select following option for Registration
            </h1>

            <form
              noValidate
              onSubmit={createAdminInfo}
              className='flex ml-20  items-center justify-center flex-col gap-3 rounded-lg p-4 text-black  h-[70vh] w-[60vw] '
            >
              <div className=' flex  bg-slate-200 rounded-lg items-center  justify-evenly gap-3 h-[55vh] w-[60vw] border-2  shadow-lg'>
                <div className='border-2  w-[22vw] h-[32vh]  shadow-2xl  p-20 flex flex-col justify-center items-center' >
                  <label htmlFor='image_uploads' className='cursor-pointer'>
                    {previewImage ? (
                      <img
                        className='w-40 h-40 rounded-full m-auto'
                        src={previewImage}
                      />
                    ) : (
                      <BsPersonCircle className=' w-40 h-40 rounded-full m-auto' />
                    )}
                  </label>

                  <input
                    onChange={getImage}
                    className='hidden'
                    type='file'
                    name='image_uploads'
                    id='image_uploads'
                    accept='.jpg, .jpeg, .png, .svg'
                  />
                </div>

                <div className='border-2  w-[20vw] h-[30vh] flex flex-col gap-5'>
                  {/* <div className='flex flex-col gap-1'>
                    <label htmlFor='fullName' className='font-semibold'>
                      {' '}
                      Name{' '}
                    </label>
                    <input
                      type='text'
                      required
                      name='fullName'
                      id='fullName'
                      placeholder='Enter your name..'
                      className='bg-transparent px-2 py-1 border'
                      onChange={handleUserInput}
                      value={infoData.fullName}
                    />
                  </div> */}

                  <TextField
                    id='standard-basic'
                    variant='outlined'
                    color='secondary'
                    name='fullName'
                    helperText=''
                    label='Enter User Name'
                    onChange={handleUserInput}
                    value={infoData.fullName}
                  />

                  <div className='  flex flex-col gap-1'>
                    
                    <TextField
                      id='standard-basic'
                      variant='outlined'
                      color='secondary'
                      helperText=''
                      name='branch'
                      label='Enter your branch..'
                      onChange={handleUserInput}
                      value={infoData.branch}
                    />
                  </div>

                  <div className=' flex flex-col gap-1'>
                    {/* <label htmlFor='subs' className='font-semibold'>
                      {' '}
                      subs{' '}
                    </label> */}
                    <TextField
                      id='standard-basic'
                      variant='outlined'
                      color='secondary'
                      helperText=''
                      name='subs'
                      label='Enter your subject Name'
                      onChange={handleUserInput}
                      value={infoData.subs}
                    />
                  </div>
                </div>
              </div>

              <div
                className=' relative flex  border-2 border-black
              '
              >
                <button
                  type='submit'
                  className=' bg-blue-900  absolute  left-72 rounded-lg text-white  px-10  py-4 font-semibold text-lg cursor-pointer'
                >
                  save
                </button>
              </div>
              {/* <div className='right'>
                    <label htmlFor='image-upload'></label>
                  </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupmodelAdmin
