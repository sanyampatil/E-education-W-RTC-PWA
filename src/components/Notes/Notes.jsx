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

const Notes = () => {
  return (
    <div className=' h-[90vh]  relative '>
      <div className=' relative'>
        <div className='absolute    left-80 font-bold text-[15.5rem]  text-green-200 '>
          Notes{' '}
        </div>

        <div className='bg-green-500 w-full] h-[60vh]  rounded-b-[100px] '></div>
        <div className=' w-full h-[30vh]'>
          <div className='flex items-center  justify-center gap-40 mt-20	'>
            <Link to='/notes/create-notes'>
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                create notes
              </button>
            </Link>

            <Link to='/notes/upload-notes'>
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                {' '}
                upload notes
              </button>
            </Link>

            <Link to='/notes/create-notes'>
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                check notes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notes
