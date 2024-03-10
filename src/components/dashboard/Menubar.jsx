import React from 'react'
import { Link } from 'react-router-dom'

const Manubar = () => {
  return (
    <div className='w-[20vw] h-[90vh] bg-slate-700  flex flex-col items-center gap-5 '>
      <div className=' profile w-[20vw] h-[30vh] p-2 rounded-lg bg-orange-400'>
        Admin imge and name
      </div>
      <div>
        <button className='bg-green-500 rounded-lg ml-2 p-5'>
          <Link to='/admin-dashboard/view-Student'>view-Student </Link>
        </button>
        <button className='bg-green-500 rounded-lg ml-2 p-5'>
          <Link to='/admin-dashboard/view-Alldoubts'>view Doubt </Link>{' '}
        </button>
      </div>
    </div>
  )
}

export default Manubar
