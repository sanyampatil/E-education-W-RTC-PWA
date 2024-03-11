import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetAdminInfoData } from '../redux/slices/adminInfoSlices'

const Profile = () => {
  const dispatch = useDispatch()

  
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
  },[])

  return (
    <>
      <main className='profile-paget '>
        <section className='relative '>
          <div className='absolute  w-full h-[100vh]  '>
            <img
              className='w-full  h-[70vh]'
              src='https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80'
              alt=''
            />
          </div>
          <div className='bprder-2 border-green-800 '>
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-50 bg-black'
            ></span>
          </div>
          {/* <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px'
            // style='transform: translateZ(0px)'
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-blueGray-200 fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div> */}

          <div></div>
        </section>
        <section className='relative bg-blueGray-200 border-1  border-red-200 '>
          <div className='container  p-10 relative'>
            <div className='  flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-[40vh]'>
              <div className='flex items-center justify-center'>
                <h1 className='  absolute top-[10%] w-[25vw] h-[50vh]   border-red-200 rounded-[50%] '>
                  <img
                    // src={Admindata?.avatar?.secure_url}
                    className='w-[25vw] h-[50vh] rounded-[50%]'
                  />
                </h1>
              </div>
              <div className='px-6'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                    <div className='relative '>
                      <img
                        alt='...'
                        src='https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg'
                        className='shadow-xl rounded-full h-[100%] align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center '>
                    <div className='py-6 px-3 mt-32 sm:mt-0'>
                      <div className='flex items-center justify-between gap-2'>
                        <Link
                          to='/changepassword'
                          className='w-1/2 bg-blue-600 hover:bg-blue-500 transition-all ease-in-out duration-300 rounded-xl font-semibold py-2 cursor-pointer text-center'
                        >
                          <button>Change password</button>
                        </Link>
                        <Link
                          to='/user/editprofile'
                          className='w-1/2 bg-blue-600 hover:bg-blue-500 transition-all ease-in-out duration-300 rounded-xl font-semibold py-2 cursor-pointer text-center'
                        >
                          <button>Edit profile</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='w-full lg:w-4/12 px-4 lg:order-1 '>
                    <div className='flex justify-center py-4 lg:pt-4 pt-8'>
                      <div className='mr-4 p-3 text-center'>
                        <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                          22
                        </span>
                        <span className='text-xl text-blueGray-400'>
                          Friends
                        </span>
                      </div>
                      <div className='mr-4 p-3 text-center'>
                        <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                          10
                        </span>
                        <span className='text-sm text-blueGray-400'>
                          Photos
                        </span>
                      </div>
                      <div className='lg:mr-4 p-3 text-center'>
                        <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                          89
                        </span>
                        <span className='text-sm text-blueGray-400'>
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-center mt-12'>
                  <h3 className='text-4xl font-semibold leading-normal mb-2 text-blueGray-700 '>
                    {Admindata.fullName}
                  </h3>
                  <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                    <i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
                    <p>branch:-</p>
                    {Admindata.branch}
                  </div>
                  <div className='mb-2 text-blueGray-600 mt-10 '>
                    <i className='fas fa-briefcase mr-2 text-lg text-blueGray-400'></i>
                    subject:-{Admindata.subs}
                  </div>
                  <div className='mb-2 text-blueGray-600 mt-10'>
                    <i className='fas fa-briefcase mr-2 text-lg text-blueGray-400'></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className='mb-2 text-blueGray-600'>
                    <i className='fas fa-university mr-2 text-lg text-blueGray-400'></i>
                    University of Computer Science
                  </div>
                </div>
                <div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
                  <div className='flex flex-wrap justify-center'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a href='#pablo' className='font-normal text-pink-500'>
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className='relative bg-blueGray-200 pt-8 pb-6 mt-8'>
            <div className='container mx-auto px-4'>
              <div className='flex flex-wrap items-center md:justify-between justify-center'>
                <div className='w-full md:w-6/12 px-4 mx-auto text-center'>
                  <div className='text-sm text-blueGray-500 font-semibold py-1'>
                    Made with{' '}
                    <a
                      href='https://www.creative-tim.com/product/notus-js'
                      className='text-blueGray-500 hover:text-gray-800'
                      target='_blank'
                    >
                      Notus JS
                    </a>{' '}
                    by{' '}
                    <a
                      href='https://www.creative-tim.com'
                      className='text-blueGray-500 hover:text-blueGray-800'
                      target='_blank'
                    >
                      {' '}
                      Creative Tim
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  )
}

export default Profile
