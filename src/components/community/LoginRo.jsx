import React, { useState } from 'react'
// import logo from "../Images/live-chat_512px.png";
import { Backdrop, Button, CircularProgress, TextField } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Toaster from './Toaster'

import chatmsg from '../../images/chatmsg.png'
import chatmsg2 from '../../images/chatmsg2.png'

import { useSelector } from 'react-redux'

function LoginRo () {
  const [showlogin, setShowLogin] = useState(false)
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const [logInStatus, setLogInStatus] = React.useState('')
  const [signInStatus, setSignInStatus] = React.useState('')

  const navigate = useNavigate()
  const lightTheme = useSelector(state => state.themeKey)
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // function changeHandler (e) {
  //   const { name, value } = e.target
  //   // setSignupData({
  //     ...signupData,
  //     [name]: value
  //   })
  //   // console.log(signupData)
  // }

  const loginHandler = async e => {
    setLoading(true)
    console.log(data)
    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      }

      const response = await axios.post(
        'http://localhost:7861/api/v1/student/login/',
        data,
        config
      )
      console.log('Login : ', response)
      setLogInStatus({ msg: 'Success', key: Math.random() })
      setLoading(false)
      const localData = localStorage.setItem(
        'userData',
        JSON.stringify(response)
      )

      localStorage.setItem('stuIsLogin', true)
      console.log(localData)
      navigate('/community/mychat/welcome')
    } catch (error) {
      setLogInStatus({
        msg: 'Invalid User name or Password',
        key: Math.random()
      })
    }
    setLoading(false)
  }

  // async function signUpHandler () {
  //   formData.append('username', signupData.username)
  //   formData.append('email', signupData.email)
  //   formData.append('password', signupData.password)

  //   // console.log('fromData from Signup', formData)

  //   const response = await dispatch(createAdminAccount(formData))
  //   console.log('one', response)

  //   // console.log("three",response.[[PromiseResult]])
  //   console.log('two', response.payload)

  //   // dispatchClick(admineRegisterReducers())
  //   // console.log('handleRegisterOnClk AdminRegister ', AdminRegister)
  //   // const Success = response?.payload?.success\
  //   localStorage.setItem('adminIsRegister', true)
  //   if (response?.payload?.success) {
  //     navigate('/admin/login')
  //   }

  //   // setSignupData({
  //     username: '',
  //     email: '',
  //     password: ''
  //   })
  // }

  const signUpHandler = async () => {
    setLoading(true)
    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      }

      const response = await axios.post(
        'http://localhost:7861/api/v1/student/register/',
        data,
        config
      )
      console.log('signup', response)
      setSignInStatus({ msg: 'Success', key: Math.random() })
      localStorage.setItem('userData', JSON.stringify(response))
      localStorage.setItem('stuIsLogin', true)
      navigate('/community/mychat/welcome')
      setLoading(false)
    } catch (error) {
      console.log(error)
      if (error.response.status === 405) {
        setLogInStatus({
          msg: 'User with this email ID already Exists',
          key: Math.random()
        })
      }
      if (error.response.status === 406) {
        setLogInStatus({
          msg: 'User Name already Taken, Please take another one',
          key: Math.random()
        })
      }
      setLoading(false)
    }
  }

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color='secondary' />
      </Backdrop>
      <div className='login-container  ml-10  '>
        {!showlogin && (
          <div className='image-container flex '>
            <img src={chatmsg} alt='Logo' className=' w-[70%]' />

            <div className='  text-center'>
              <h1
                className={
                  'text-6xl  font-bold ' + (lightTheme ? '' : 'text-white')
                }
              >
                {' '}
                register for community chat{' '}
              </h1>

              <p
                className={
                  'text-[12px] text-blue-400 text-left ' +
                  (lightTheme ? '' : 'text-white')
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                recusandae et neque tenetur, alias qui quo nemo voluptates
                itaque deleniti.
              </p>
            </div>
          </div>
        )}
        {showlogin && (
          <div className='image-container flex '>
            <img src={chatmsg2} alt='Logo' className=' w-[70%]' />

            <div className='  text-center'>
              <h1
                className={
                  'text-6xl  font-bold ' + (lightTheme ? '' : 'text-white')
                }
              >
                {' '}
                Login for community chat{' '}
              </h1>

              <p
                className={
                  'text-[12px] text-blue-400 text-left ' +
                  (lightTheme ? '' : 'text-white')
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                recusandae et neque tenetur, alias qui quo nemo voluptates
                itaque deleniti.
              </p>
            </div>
          </div>
        )}
        {showlogin && (
          <div
            className={
              'login-box  border-2 border-black' +
              (lightTheme ? '' : 'text-white bg-black')
            }
          >
            <p className='login-text text-black'>Login to your Account</p>
            <TextField
              onChange={changeHandler}
              id='standard-basic'
              label='Enter User Name'
              variant='outlined'
              color='secondary'
              name='username'
              onKeyDown={event => {
                if (event.code == 'Enter') {
                  // console.log(event);
                  loginHandler()
                }
              }}

              // value={signupData.username}
            />
            <TextField
              onChange={changeHandler}
              id='outlined-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              color='secondary'
              name='password'
              onKeyDown={event => {
                if (event.code == 'Enter') {
                  // console.log(event);
                  loginHandler()
                }
              }}

              // value={signupData.password 
            />
            <Button
              variant='outlined'
              color='secondary'
              onClick={loginHandler}
              isLoading
            >
              Login
            </Button>
            <p>
              Don't have an Account ?{' '}
              <span
                className='hyper'
                onClick={() => {
                  setShowLogin(false)
                }}
              >
                Sign Up
              </span>
            </p>
            {logInStatus ? (
              <Toaster key={logInStatus.key} message={logInStatus.msg} />
            ) : null}
          </div>
        )}
        {!showlogin && (
          <div
            className={
              'login-box border-2 border-black' + (lightTheme ? '' : '')
            }
          >
            <p className='login-text'>Create your Account</p>
            <TextField
              onChange={changeHandler}
              id='standard-basic'
              label='Enter User Name'
              variant='outlined'
              color='secondary'
              name='username'
              helperText=''
              onKeyDown={event => {
                if (event.code == 'Enter') {
                  // console.log(event);
                  signUpHandler()
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id='standard-basic'
              label='Enter Email Address'
              variant='outlined'
              color='secondary'
              name='email'
              onKeyDown={event => {
                if (event.code == 'Enter') {
                  // console.log(event);
                  signUpHandler()
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id='outlined-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              color='secondary'
              name='password'
              onKeyDown={event => {
                if (event.code == 'Enter') {
                  // console.log(event);
                  signUpHandler()
                }
              }}
            />
            <Button
              variant='outlined'
              color='secondary'
              onClick={signUpHandler}
            >
              Sign Up
            </Button>
            <p>
              Already have an Account ?
              <span
                className='hyper'
                onClick={() => {
                  setShowLogin(true)
                }}
              >
                Log in
              </span>
            </p>
            {signInStatus ? (
              <Toaster key={signInStatus.key} message={signInStatus.msg} />
            ) : null}
          </div>
        )}
      </div>
    </>
  )
}

export default LoginRo
