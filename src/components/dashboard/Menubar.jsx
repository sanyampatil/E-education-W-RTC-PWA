import React from 'react'
import { Link } from 'react-router-dom'

const Manubar = () => {
  return (
    <div className='w-[20vw] h-[90vh] bg-slate-700  flex flex-col items-center justify-center '>

    <div className=' profile w-[20vw] h-[30vh] bg-orange-400'>
1

    </div>
      <div>
        <button className='bg-green-500 rounded-lg ml-2 p-5'>
          <Link to='/admin-dashboard/view-Student'>view-Student </Link>
        </button>
        <button className='bg-green-500 rounded-lg ml-2 p-5'>
        <Link to="/admin-dashboard/view-Alldoubts">view Doubt</Link> </button>
      </div>  
    </div>
  )
}

export default Manubar
