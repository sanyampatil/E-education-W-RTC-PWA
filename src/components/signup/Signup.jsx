import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { isEmail, isValidPassword } from '../../helpers/regexmatcher'
import { createAccount } from '../../redux/slices/authSlices'

function Signup () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setSignupData({
      ...signupData,
      [name]: value
    })
    // console.log(signupData)
  }

  async function createNewAccount (event) {
    event.preventDefault()
    if (!signupData.username || !signupData.email || !signupData.password) {
      toast.error('All required')
      return
    }

    // checking name field length
    if (signupData.username.length < 5) {
      toast.error('Name should be atleast of 5 characters')
      return
    }
    if (!isEmail(signupData.email)) {
      toast.error('Invalid email id')
      return
    }
    if (!isValidPassword(signupData.password)) {
      toast.error(
        'Password should be 6 - 16 character long with atleast a number and special character'
      )
      return
    }

    const formData = new FormData()
    formData.append('username' , signupData.username)
    formData.append('email' , signupData.email)
    formData.append('password' , signupData.password)

    console.log("fromData from Signup",formData)
    
    const res =  dispatch(createAccount(formData))


    setSignupData({
      username: '',
      email: '',
      password: ''
    })
  }

  return (
    <section className='h-full bg-neutral-200 dark:bg-neutral-700 flex justify-center items-center '>
      <div className='container h-full p-10'>
        <div className='g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
          <div className=' mt-7 w-full'>
            <div className='block rounded-lg bg-white shadow-lg dark:bg-neutral-800'>
              <div className='g-0 lg:flex lg:flex-wrap'>
                {/* <!-- Left column container--> */}
                <div className='px-4 md:px-0 lg:w-6/12'>
                  <div className='md:mx-6 md:p-12'>
                    {/* <!--Logo--> */}
                    <div className='text-center'>
                      <img
                        className='mx-auto w-48'
                        src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'
                        alt='logo'
                      />
                      <h4 className='mb-12 mt-1 pb-1 text-xl font-semibold'>
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form
                      noValidate
                      onSubmit={createNewAccount}
                      className='flex flex-col justify-center gap-3 rounded-lg p-4 text-black w-96 '
                    >
                      <h1 className='text-center text-2xl font-bold'>
                        Registration Page
                      </h1>

                      <div className='flex flex-col gap-1'>
                        <label htmlFor='username' className='font-semibold'>
                          {' '}
                          Name{' '}
                        </label>
                        <input
                          type='text'
                          required
                          name='username'
                          id='username'
                          placeholder='Enter your name..'
                          className='bg-transparent px-2 py-1 border'
                          onChange={handleUserInput}
                          value={signupData.username}
                        />
                      </div>
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
                          value={signupData.email}
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
                          value={signupData.password}
                        />
                      </div>

                      <button
                        type='submit'
                        className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'
                      >
                        Create account
                      </button>

                      <p className='text-center'>
                        Already have an account ?{' '}
                        <Link
                          to='/login'
                          className='link text-accent cursor-pointer'
                        >
                          {' '}
                          Login
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column background and description--> */}
                <div
                  className='flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none'
                  style={{
                    background:
                      'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                  }}
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
    </section>
  )
}

export default Signup
