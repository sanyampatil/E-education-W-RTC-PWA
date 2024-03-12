import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SignupPopUp from '../signup/Popup'
import Signup from '../signup/Signup'
import { toggleTheme } from '../../redux/slices/themeSlice'
import { logoutAdminAccount } from '../../redux/slices/adminAuthSlices'
import Typewriter from 'typewriter-effect'
import studentauthSlices, {
  logoutStudentAccount
} from '../../redux/slices/studentauthSlices'
import NightlightIcon from '@mui/icons-material/Nightlight'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton } from '@mui/material'
// import TypewriterComponent from 'typewriter-effect'
import { BsPersonCircle } from 'react-icons/bs'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showSignup, setshowSignup] = useState(false)
  const [imgGet, setimgGet] = useState(false)
  const lightTheme = useSelector(state => state.themeKey)
  const adminIslogin = useSelector(state => state?.adminAuth?.adminIslogin)
  const StudentRegister = useSelector(state => state.register.studentRegister)
  const AdminRegister = useSelector(state => state.register.admineRegister)
  const studentIslogged = useSelector(state => state?.stuAuth?.studentIslogged)

  // accss local storage data

  const stuIsLogin = localStorage.getItem('stuIsLogin')
  console.log('student is login ', stuIsLogin)

  const AdminIsLogin = localStorage.getItem('adminIslogin')
  console.log('AdminLogin:::-', AdminIsLogin)

  const Admindata = useSelector(state => state.Admininfo.AdminInfoData)
  console.log('adminDetail', Admindata)

  // const imageGet = useSelector(state => state.Admininfo.data.data?.avatar?.secure_url)
  // console.log('image',imageGet)

  // for displaying the options acc to role
  const role = useSelector(state => state?.auth?.role)

  async function adminHandleLogout (e) {
    e.preventDefault()

    const res = await dispatch(logoutAdminAccount())
    if (res?.payload?.success) navigate('/')
  }

  async function studentHandleLogout (e) {
    e.preventDefault()

    const res = await dispatch(logoutStudentAccount())
    if (res?.payload?.success) navigate('/')
  }

  function handelLoginBtnClk () {
    dispatch()
  }

  return (
    <>
      <nav
        className={
          ' dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600' +
          (lightTheme ? '' : '')
        }
      >
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a
            // href='https://flowbite.com/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
            // src='https://flowbite.com/docs/images/logo.svg'
            // className='h-8'
            // alt='EduCollab'
            />
            <span
              className={
                'self-center text-2xl text-black font-semibold whitespace-nowrap dark:text-white' +
                (lightTheme ? '' : ' text-white')
              }
            >
              EduCollab
            </span>
          </a>
          <div className='flex gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            {!adminIslogin && !stuIsLogin && (
              <ul className=' flex gap-5'>
                <button
                  type='button'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  <Link onClick={() => setshowSignup(true)}>Get started</Link>

                  {showSignup && (
                    <SignupPopUp onClose={() => setshowSignup(false)} />
                  )}
                </button>

                <button
                  type='button'
                  className='  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  {AdminRegister && (
                    <Link to='/admin/login' onClick={handelLoginBtnClk}>
                      {' '}
                      A-login
                    </Link>
                  )}
                  {StudentRegister && (
                    <Link to='/student/login'> Ahh-login</Link>
                  )}
                  {/* <Link to='/admin/Login'>login</Link> */}
                </button>
              </ul>
            )}

            {adminIslogin && (
              <ul className=' flex gap-5 '>
                <div>
                  <div className='text-white flex items-center justify-center gap-2 cursor-pointer border-2 border-gray-900  rounded-xl p-1'>
                    <Link to='/admin/profile'>
                      {Admindata?.avatar?.secure_url && (
                        <img
                          className='relative inline-block h-10 w-14   rounded-lg object-cover object-center'
                          alt='Image placeholder'
                          src={Admindata?.avatar?.secure_url}
                        />
                      )}
                    </Link>
                    <div className=' w-[10vw] h-10 bg-slate-900   flex items-center pl-3   rounded-lg '>
                      <Typewriter
                        options={{
                          strings: [`Hii.! ${Admindata.fullName}`],
                          autoStart: true,
                          loop: true,
                          cursor: '',
                          wrapperClassName: 'typewriterpara'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type='button'
                  className='  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  <Link onClick={adminHandleLogout}>admin Logout</Link>
                </button>
              </ul>
            )}

            {stuIsLogin && (
              <ul className=' flex gap-5 '>
                <div>
                  <div className='text-white flex items-center justify-center gap-2 cursor-pointer border-2 border-gray-900  rounded-xl p-1 '>
                    <Link to='/admin/profile'>
                      <div
                        className={
                          'relative inline-block  w-14 text-black  rounded-lg object-cover object-center text-[40px]' +
                          (lightTheme ? '' : ' text-gray-600')
                        }
                      >
                        <BsPersonCircle className=' ' />
                      </div>
                    </Link>
                    <div className=' w-[10vw] h-10 bg-slate-900   flex items-center pl-3   rounded-lg '>
                      <Typewriter
                        options={{
                          strings: ['hii!... student'],
                          autoStart: true,
                          loop: true,
                          cursor: '',
                          wrapperClassName: 'typewriterpara'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type='button'
                  className='  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  <Link onClick={adminHandleLogout}>Logout</Link>
                </button>
              </ul>
            )}

            {studentIslogged && !adminIslogin && (
              <ul className=' flex gap-5 '>
                <button
                  type='button'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  <Link to='student/profile'> student Profile</Link>
                </button>

                <button
                  type='button'
                  className='  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  <Link onClick={studentHandleLogout}>student Logout</Link>
                </button>
              </ul>
            )}
            <IconButton
              className=' border-2 border-white'
              onClick={() => {
                dispatch(toggleTheme())
              }}
            >
              {lightTheme && (
                <NightlightIcon
                  className={'icon ' + (lightTheme ? '' : 'dark')}
                />
              )}
              {!lightTheme && (
                <LightModeIcon
                  className={'icon text-white   ' + (lightTheme ? '' : 'dark')}
                />
              )}
            </IconButton>

            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              // aria-controls='navbar-sticky'
              // aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {/* <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg> */}
            </button>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <Link
                  to='/'
                  className={
                    'block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 md:dark:text-blue-500' +
                    (lightTheme ? '' : ' text-white')
                  }
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              {!adminIslogin && (
                <li>
                  <Link
                    to='/community'
                    className={
                      'block py-2 px-3 text-black  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' +
                      (lightTheme ? '' : ' text-white')
                    }
                  >
                    community
                  </Link>
                </li>
              )}
              {adminIslogin && (
                <li>
                  <Link
                    to='admin/community'
                    className={
                      'block py-2 px-3 text-black  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' +
                      (lightTheme ? '' : ' text-white')
                    }
                  >
                    adminCommunity
                  </Link>
                </li>
              )}
              <li>
                {stuIsLogin && (
                  <Link
                    to='/classroom'
                    className={
                      'block py-2 px-3 text-black md:p-0 md:dark:hover:text-blue-500 dark:t   ext-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' +
                      (lightTheme ? '' : ' text-white')
                    }
                  >
                    classroom
                  </Link>
                )}

                {adminIslogin && (
                  <Link
                    to='/admin-dashboard'
                    className={
                      'block py-2 px-3 text-black md:p-0 md:dark:hover:text-blue-500 dark:t   ext-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' +
                      (lightTheme ? '' : ' text-white')
                    }
                  >
                    dashborad
                  </Link>
                )}
              </li>
              <li>
                <Link
                  to='/notes'
                  className={
                    'block py-2 px-3 text-black  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' +
                    (lightTheme ? '' : ' text-white')
                  }
                >
                  notes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
