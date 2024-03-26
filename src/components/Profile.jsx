import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetAdminInfoData } from '../redux/slices/adminInfoSlices'

const Profile = () => {
  const dispatch = useDispatch()

  const lightTheme = useSelector(state => state.themeKey)

  console.log('light', lightTheme)
  /////fetch adminInfo data from adminDeatail Model

  const AdminId = useSelector(state => state.adminAuth.data._id)
  console.log('Admin Id', AdminId)

  async function LoadData () {
    const data = await dispatch(GetAdminInfoData(AdminId))
    console.log('data', data)
  }

  // const  Admindata = localStorage.get("infoData")
  const Admindata = useSelector(state => state.Admininfo.AdminInfoData)
  console.log('adminDetail', Admindata)

  useEffect(() => {
    LoadData()
  }, [])

  return (
    <>
      <div className='h-[105vh] w-full '>
        <div className='  h-[105vh]  bg-gray-200  dark:bg-gray-800   pt-28  flex flex-wrap items-center  justify-center  '>
          <div className='container lg:w-2/7     xl:w-2/7 sm:w-full md:w-2/3     bg-white  shadow-lg    transform   duration-200 easy-in-out'>
            <div className='  h-48 overflow-hidden'>
              <img
                className='w-full'
                src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                alt=''
              />
            </div>
            <div className='flex justify-center px-5  -mt-12'>
              <img
                className='h-44 w-44 bg-white p-2 rounded-full   '
                src={Admindata.avatar.secure_url}
                alt=''
              />
            </div>
            <div className=' '>
              <div className='text-center px-14'>
                <h2 className='text-gray-800 text-3xl font-bold'>
                  {Admindata.fullName}
                </h2>
                <a
                  className='text-gray-400 mt-2 hover:text-blue-500'
                  href='https://www.instagram.com/immohitdhiman/'
                  target='BLANK()'
                >
                  @immohitdhiman
                </a>
                <p>{Admindata.branch}</p>
                <p>{Admindata.subs}</p>

                <p className='mt-2 text-gray-500 text-sm'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{' '}
                </p>
              </div>

              <hr className='mt-6' />
              <div className='flex  bg-gray-50 '>
                <div className='text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer'>
                  <p>
                    <button
                      type='button'
                      class='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                    >
                      edit Proile
                    </button>
                  </p>
                </div>
                <div className='border'></div>
                <div className='text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer'>
                  <Link
                    to='/admin-dashboard
'
                  >
                    <button
                      type='button'
                      class='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                    >
                      dashboard
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
