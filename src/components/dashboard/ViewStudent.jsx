import React, { useEffect } from 'react'
import { AdminfetchAllStudent } from '../../redux/slices/dashboardSlice'
import { useDispatch, useSelector } from 'react-redux'
import { StudentCard } from './components/studentCard'

import '../../App.css'
const ViewStudent = () => {
  const dispatch = useDispatch()

  async function LoadData () {
    const data = await dispatch(AdminfetchAllStudent())
    console.log('data --> AdminfetaAllStudent', data)
  }

  useEffect(() => {
    LoadData()
  }, [])

  const StudentCardItems = useSelector(
    state => state?.dashboard?.AllStudentData
  )
  console.log('StudentCardItems', StudentCardItems)

  return (
    <div className='  bg-indigo-950  overflow-auto   custom-scrollbar flex  flex-col   '>
      ;
      <form className=' mx-auto'>
        <label
          for='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search name...'
            required
          />
          <button
            type='submit'
            className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Search
          </button>
        </div>
      </form>
      {/* <div className='w-full'>;</div> */}
      <div className='w-full h-[90vh]'>
        {!StudentCardItems
          ? ''
          : StudentCardItems.map(note => {
              {
                console.log(note)
              }
              return <StudentCard data={note} key={note._id} />
            })}
      </div>
      <div className='w-[45vw] h-[70vh]  m-2 text-white bg-gray-900 pt-5 rounded-lg  right-5   fixed flex flex-col  items-center justify-center '>
        <div className='text-[7rem] bg-slate-600  py-10 px-14 rounded-full inline '>
          {StudentCardItems.length}
        </div>
        <h1 className='text-[3rem] font-semibold '> Total Student</h1>
      </div>
    </div>
  )
}

export default ViewStudent
