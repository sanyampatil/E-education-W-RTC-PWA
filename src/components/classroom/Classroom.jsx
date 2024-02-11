import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Classroom = () => {
  const navigate = useNavigate()
  const [roomCode, setroomCode] = useState("")
  const handelFfromSubmit = ev => {
    ev.preventDefault()

    navigate(`/room/${roomCode}`)
  }
  return (
    <div className='w-[100%] h-[90vh] flex justify-center items-center '>
      <div  className=' flex flex-col  bg-blue-50  p-20 '>
        <form onSubmit={handelFfromSubmit} action=''>
          <div className=' flex flex-col gap-5'>
            <label>Enter the room code</label>

            <input
            className=' p-3 rounded-xl border-2'
              value={roomCode}
              onChange={e => setroomCode(e.target.value)}
              type='text'
              required
              placeholder='Enter Room code'
            />
          </div>

          <button className='p-3 bg-blue-700  mt-5  rounded-xl text-white' type='submit'>Enter Room</button>
        </form>
      </div>
    </div>
  )
}

export default Classroom


