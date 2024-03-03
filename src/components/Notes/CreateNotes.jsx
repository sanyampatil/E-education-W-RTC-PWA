import React from 'react'
import { Note } from '@mui/icons-material'
import AddNotes from './createNotes/AddNotes'

// import { Tldraw } from 'tldraw'
// import 'tldraw/tldraw.css'

const CreateNotes = () => {
  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
      <div>
        <AddNotes />
        <Note />
      </div>
    </div>
  )
}

export default CreateNotes
