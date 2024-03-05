import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Classroom = () => {
  const lightTheme = useSelector(state => state.themeKey)

  return (
    <div>
      <div className=' h-[90vh] flex items-center  justify-evenly  p-10 '>
        <div className='w-[40vw] h-[60vh] '>
          <div className='ml-5'>
            <h1
              className={
                'text-[5rem] font-semibold ' + (lightTheme ? '' : 'text-white')
              }
            >
              let's start with EduCollab{' '}
            </h1>
            <p className={'' + (lightTheme ? '' : ' text-gray-800')
              }>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium doloremque architecto, doloribus adistinctio fugiat
              similique ipsa commodi reprehenderit est facere necessitatibus!
            </p>

            <Link to='/classroom-Option'>
              {' '}
              <button className='text-[3.rem]  bg-blue-700 p-4 mt-7 text-white rounded-xl '>
                get Started
              </button>
            </Link>
          </div>
        </div>

        <div className=' w-[50vw] h-[70vh] border-2 mt-10 border-red-500'></div>
      </div>
    </div>
  )
}

export default Classroom
