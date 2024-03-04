import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import addNotes from '../../../redux/slices/NotesSlices'

function AddNotes () {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  console.log('inpute', input)
  const addNotesHandler = e => {
    e.preventDefault()
    dispatch(addNotes(input))
    setInput('')
  }

  return (
    <div>
      <form onSubmit={addNotesHandler} className='space-x-3 mt-12 '>
        <div className='flex flex-col gap-10  items-start justify-center'>
          <input
            type='text'
            className='bg-gray-800 rounded border  border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Enter a topic name'
            // value={input}
            // onChange={e => setInput(e.target.value)}
          />
          <textarea
            type='text'
            className='bg-gray-800 rounded border w-[50vw] h-[50vh] border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Enter a Notes...'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            Add Notes
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNotes
