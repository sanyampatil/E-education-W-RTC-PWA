import { input } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotesCard = ({ data }) => {
  const stuIsLogin = localStorage.getItem('stuIsLogin')
  console.log('student is login ', stuIsLogin)
  console.log(data)
  return (
    <div className=' w-[25vw]  h-[35vh] flex items-center justify-center flex-col rounded-lg shadow-xl  bg-white'>
      <div className='border-1 w-[20vw] h-[30vh]   border-black flex flex-col items-center justify-center gap-3'>
        <div></div>
        <p className='text-2xl font-bold text-center'>{data.subName}</p>
        <p className='text-md'>{data.topicName}</p>
        <div className='flex gap-2 text-white'>
          <button className='bg-blue-600 p-3 rounded-lg'>
            <Link to={data.noteFile.secure_url}>view Notes</Link>
          </button>

          {stuIsLogin && (
            <a href={data.noteFile.secure_url} download='notes.pdf'>
              <button className='bg-red-500 p-3 rounded-lg'>download</button>
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
