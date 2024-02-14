import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
const VideoConfPopup = ({onClose}) => {
  const navigate = useNavigate()
  const [roomCode, setroomCode] = useState('')
  console.log(onClose)
  const handelFfromSubmit = ev => {
    ev.preventDefault()

    navigate(`/room/${roomCode}`)
  }
  return (
    <div className='   bg-opacity-30 inset-0 backdrop-blur-sm fixed flex justify-center items-center bg-black'>
      <div className=' flex flex-col gap-5 text-white '>
        <div className='w-[100%] h-[90vh] flex justify-center items-center flex-col relative'>
          <ImCross className='text-black text-2xl  ml-[100%] ' 
          onClick={onClose} />
          <div className=' flex flex-col bg-white rounded-md  p-20 '>
            <form onSubmit={handelFfromSubmit} action=''>
              <div className='  flex flex-col gap-5'>
                <label className='text-black text-2xl'>Enter the room code</label>

                <input
                  className=' p-3 rounded-xl border-2 text-black'
                  value={roomCode}
                  onChange={e => setroomCode(e.target.value)}
                  type='text'
                  required
                  placeholder='Enter Room code'
                />
              </div>

              <button
                className='p-3 bg-blue-700  mt-5  rounded-xl text-white'
                type='submit'
              >
                Enter Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoConfPopup
