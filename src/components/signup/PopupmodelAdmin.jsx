import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { BsPersonCircle } from 'react-icons/bs'
import { toast } from 'react-hot-toast'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createAdmininfo } from '../../redux/slices/adminInfoSlices'
// import { TransitionProps } from '@mui/material/transitions';
const PopupmodelAdmin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [previewImage, setPreviewImage] = useState('')

  const [signupData, setSignupData] = useState({
    fullName: '',
    branch: '',
    class: '',
    subject: '',
    avatar: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setSignupData({
      ...signupData,
      [name]: value
    })
  }

  function getImage (event) {
    event.preventDefault()
    // getting the image
    const uploadedImage = event.target.files[0]

    if (uploadedImage) {
      setSignupData({
        ...signupData,
        avatar: uploadedImage
      })
      const fileReader = new FileReader()
      fileReader.readAsDataURL(uploadedImage)
      fileReader.addEventListener('load', function () {
        setPreviewImage(this.result)
      })
    }
  }

  async function createNewAccount (event) {
    event.preventDefault()
    if (
      !signupData.branch ||
      !signupData.class ||
      !signupData.fullName ||
      !signupData.avatar
    ) {
      toast.error('Please fill all the details')
      return
    }

    // checking name field length

    const formData = new FormData()
    formData.append('fullName', signupData.fullName)
    formData.append('branch', signupData.branch)
    formData.append('class  ', signupData.class)
    formData.append('subject  ', signupData.subject)

    formData.append('avatar', signupData.avatar)

    // dispatch create account action
    const response = await dispatch(createAdmininfo(formData))
    if (response?.payload?.success) navigate('/')

    setSignupData({
      fullName: '',
      branch: '',
      class: '',
      avatar: ''
    })
    setPreviewImage('')
  }

  return (
    <>
      <div className='   bg-opacity-30 inset-0 backdrop-blur-sm fixed flex justify-center items-center bg-black'>
        <div className=' flex flex-col gap-5 text-white relative'>
          {/* <div className='absolute right-0 m-2  text-black'>
          <ImCross onClick={onClose} />
          <div className=''></div>
        </div> */}
          <div className='bg-white h-[70vh] w-[60vw] rounded-xl  text-black'>
            <h1 className='text-[25px]  mt-10 font-bold text-black'>
              Select following option for Registration
            </h1>

            <div>
              <div>
                <form
                  noValidate
                  onSubmit={createNewAccount}
                  className='flex ml-20 justify-center gap-3 rounded-lg p-4 text-black w-96 '
                >
                  <div className='left flex flex-col justify-center gap-3'>
                    <label htmlFor='image_uploads' className='cursor-pointer'>
                      {previewImage ? (
                        <img
                          className='w-24 h-24 rounded-full m-auto'
                          src={previewImage}
                        />
                      ) : (
                        <BsPersonCircle className='w-24 h-24 rounded-full m-auto' />
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
                    <div className='flex flex-col gap-1'>
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
                        value={signupData.username}
                      />
                    </div>
                    <div className='  flex flex-col gap-1'>
                      <label htmlFor='branch' className='font-semibold'>
                        {' '}
                        branch{' '}
                      </label>
                      <input  
                        type='text'
                        required
                        name='branch'
                        id='branch'
                        placeholder='Enter your branch..'
                        className='bg-transparent px-2 py-1 border'
                        onChange={handleUserInput}
                        value={signupData.branch}
                      />
                    </div>

                    <div className='  flex flex-col gap-1'>
                      <label htmlFor='class' className='font-semibold'>
                        {' '}
                        class{' '}
                      </label>
                      <input
                        type='text'
                        required
                        name='class'
                        id='class'
                        placeholder='Enter your class..'
                        className='bg-transparent px-2 py-1 border'
                        onChange={handleUserInput}
                        value={signupData.class}
                      />
                    </div>

                    <div className=' flex flex-col gap-1'>
                      <label htmlFor='subject' className='font-semibold'>
                        {' '}
                        subject{' '}
                      </label>
                      <input
                        type='text'
                        required
                        name='subject'
                        id='subject'
                        placeholder='Enter your subject..'
                        className='bg-transparent px-2 py-1 border'
                        onChange={handleUserInput}
                        value={signupData.subject}
                      />
                    </div>
                    <button
                      type='submit'
                      className='mt-2 bg-blue-900  rounded-sm py-2 font-semibold text-lg cursor-pointer'
                    >
                      Create account
                    </button>
                  </div>
                  {/* <div className='right'>
                    <label htmlFor='image-upload'></label>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupmodelAdmin
