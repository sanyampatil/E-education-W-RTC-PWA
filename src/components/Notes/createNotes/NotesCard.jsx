import React from 'react'
import { Link } from 'react-router-dom'

const NotesCard = ({ data }) => {
  console.log(data)
  return (
    <div className=' w-[25vw] h-[35vh] flex items-center justify-center flex-col rounded-lg shadow-xl  bg-white'>
      <div className='border-2 ` w-[15vw] h-[25vh]   border-black flex flex-col items-center justify-center gap-3'>
        <div></div>
        <p className='text-2xl font-bold text-center'>{data.subName}</p>
        <p className='text-md'>{data.topicName}</p>

        <button className='bg-blue-600 p-3 rounded-lg'>
          <Link to={data.noteFile.secure_url}>view Notes</Link>
        </button>
      </div>
      <p className=' text-blue-400   ml-20 mt-5 ext-right '>upload by:-{data.createBy}</p>
    </div>
  )
}

export default NotesCard
