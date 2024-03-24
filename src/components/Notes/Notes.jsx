// import { Tldraw } from 'tldraw'
// import 'tldraw/tldraw.css'

// export default function () {
// 	return (
// 		<div style={{ position: 'fixed', inset: 0 }}>
// 			<Tldraw />
// 		</div>
// 	)
// }

import React from 'react'
import { Link } from 'react-router-dom'
const AdminIsLogin = localStorage.getItem('adminIslogin')
console.log('AdminLogin:::-', AdminIsLogin)
const stuIsLogin = localStorage.getItem('stuIsLogin')
console.log('stuIsLogin', stuIsLogin)

const StudentIsLogin = false

const Notes = () => {
  return (
    <div className=' h-[90vh]    w-[100vw]  relative '>
      <div className=' flex items-center  justify-center  h-[50vh] '>
        {/* <div className='absolute    left-80 font-bold text-[15.5rem]  text-green-200 '>
          Notes{' '}
        </div> */}
        <div className=' bg-gray-200 w-[70vw] mt-[20%] h-[60vh] shadow-lg'>
          <div className='p-10'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              quia? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Enim, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Possimus at tempora quos delectus, similique deleniti totam.
              Eaque, quidem praesentium, quaerat magni dicta sed minima
              cupiditate id aperiam harum reiciendis sit!{' '}
            </p>
          </div>
          <div className=' w-full h-[30vh]'>
            <div className='flex items-center  justify-center gap-40 mt-20	'>
              {AdminIsLogin && (
                <Link to='admin/notes/create-notes'>
                  <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    create notes
                  </button>
                </Link>
              )}

              {!AdminIsLogin && (
                <Link to='student/notes/create-notes'>
                  <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    create notes
                  </button>
                </Link>
              )}

              {stuIsLogin && (
                <Link to='/student/notes/view-notes'>
                  <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    {' '}
                    View notes
                  </button>
                </Link>
              )}

              {AdminIsLogin && (
                <Link to='/admin/notes/upload-notes'>
                  <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    {' '}
                    upload notes
                  </button>
                </Link>
              )}
              {!stuIsLogin && (
                <Link to='/notes/create-notes'>
                  <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    check notes
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notes
