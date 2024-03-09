import React from 'react'
import { Link } from 'react-router-dom'

const NotesCard = ({ data }) => {
  console.log(data)
  return (
    <div className=' w-[20vw] h-[30vh] flex items-center justify-center rounded-lg   bg-white '>
      <div className='border-2 border-black p-10'>
        <div></div>
        <p className='text-xl font-bold'>{data.subName}</p>
        <p className='text-md'>{data.topicName}</p>

        <button className='bg-blue-600 p-3 rounded-lg'>
          <Link to={data.noteFile.secure_url}>view Notes</Link>
        </button>
      </div>
    </div>
  )
}

export default NotesCard
