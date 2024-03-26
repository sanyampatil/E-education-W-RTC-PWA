import { input } from '@material-tailwind/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NotesCard = ({ data }) => {
  const lightTheme = useSelector(state => state.themeKey)

  const stuIsLogin = localStorage.getItem('stuIsLogin')
  console.log('student is login ', stuIsLogin)
  console.log(data)
  return (
    <div
      className={
        ' w-[25vw]  h-[35vh] flex items-center justify-center flex-col rounded-lg shadow-xl  bg-white ' +
        (lightTheme ? '' : 'bg-gray-500')
      }
    >
      <div className='border-1 w-[20vw] h-[30vh]   border-black flex flex-col items-center justify-center gap-3'>
        <div></div>
        <p className='text-2xl font-bold text-center'>{data.subName}</p>
        <p className='text-md'>{data.topicName}</p>
        <div className='flex gap-2 text-white'>
          <button className='bg-blue-600 p-2  font-semibold shadow-lg rounded-lg'>
            <a target='_blank' href={data.noteFile.secure_url}>
              view Notes
            </a>
          </button>

          {stuIsLogin && (
            <a
              href={data.noteFile.secure_url}
              target='_blank'
              download='notes.pdf'
            >
              <button class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
                <svg
                  class='fill-current w-4 h-4 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
                </svg>
                <span>Download</span>
              </button>
            </a>
          )}
        </div>
      </div>
      <p className=' text-blue-400   ml-20 mt-5 text-right '>
        upload by:-{data.createBy}
      </p>
    </div>
  )
}

export default NotesCard
