import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { isEmail, isValidPassword } from '../../helpers/regexmatcher'
import { loginAdminAccount } from '../../redux/slices/adminAuthSlices'
import { LinkOff } from '@mui/icons-material'
import PopupmodelAdmin from '../signup/PopupmodelAdmin'

function Login () {
  const [showModel, setshowModel] = useState(false)
  const lightTheme = useSelector(state => state.themeKey)
  console.log('theam in login', lightTheme)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const AdminRegister = localStorage.getItem('adminIsRegister')
  console.log('AdminRegister:::-', AdminRegister)

  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setloginData({
      ...loginData,
      [name]: value
    })
  }

  async function AccountLogin (event) {
    event.preventDefault()
    if (!loginData.email || !loginData.password) {
      toast.error('All required')
      return
    }

    if (!isEmail(loginData.email)) {
      toast.error('Invalid email id')
      return
    }
    if (!isValidPassword(loginData.password)) {
      toast.error(
        'Password should be 6 - 16 character long with atleast a number and special character'
      )
      return
    }

    const formData = new FormData()
    formData.append('email', loginData.email)
    formData.append('password', loginData.password)

    const response = await dispatch(loginAdminAccount(formData))

    if (response?.payload?.success) {
      console.log(response)

      setshowModel(true)
      if (!AdminRegister ) {
        setshowModel(false)

        navigate('/admin/profile')
      }
    }

    setloginData({
      email: '',
      password: ''
    })
  }
  console.log('showModel........', showModel)
  console.log('admineRegister.....', AdminRegister)

  return (
    <section className='h-full  flex justify-center items-center'>
      <div className='container h-full  p-16 '>
        <div className='g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
          <div className='mt-7 w-full'>
            <div className='block rounded-lg bg-white shadow-lg dark:bg-neutral-800 h-[80vh ] '>
              <div className='g-0 lg:flex lg:flex-wrap'>
                {/* <!-- Left column container--> */}
                <div className='px-4 md:px-0 lg:w-6/12 '>
                  <div className='md:mx-6 md:p-12'>
                    {/* <!--Logo--> */}
                    <div className='text-center'>
                      <h4 className=' text-5xl font-bold mb-12 mt-1 pb-1 text-indigo-500 '>
                        EduCollab
                      </h4>
                      <p>welcome</p>
                    </div>

                    <form
                      noValidate
                      onSubmit={AccountLogin}
                      className='flex flex-col ml-20 justify-center gap-3 rounded-lg p-4 text-black w-96 '
                    >
                      <h1 className='text-center text-2xl font-bold'>
                        LOG IN PAGE
                      </h1>

                      <div className='  flex flex-col gap-1'>
                        <label htmlFor='email' className='font-semibold'>
                          {' '}
                          Email{' '}
                        </label>
                        <input
                          type='email'
                          required
                          name='email'
                          id='email'
                          placeholder='Enter your email..'
                          className='bg-transparent px-2 py-1 border'
                          onChange={handleUserInput}
                          value={loginData.email}
                        />
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label htmlFor='password' className='font-semibold'>
                          {' '}
                          Password{' '}
                        </label>
                        <input
                          type='password'
                          required
                          name='password'
                          id='password'
                          placeholder='Enter your password..'
                          className='bg-transparent px-2 py-1 border'
                          onChange={handleUserInput}
                          value={loginData.password}
                        />
                      </div>

                      <button
                        type='submit'
                        className='mt-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'
                      >
                        LOG IN
                      </button>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column background and description--> */}
                <div
                  className='flex items-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none'
                  // style={{
                  //   background:
                  //     'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                  // }}
                >
                  <div className='px-4 py-6 text-white md:mx-6 md:p-12'>
                    <h4 className='mb-6 text-xl font-semibold'>
                      We are more than just a company
                    </h4>
                    <p className='text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModel && AdminRegister && <PopupmodelAdmin />}
    </section>
  )
}

export default Login
