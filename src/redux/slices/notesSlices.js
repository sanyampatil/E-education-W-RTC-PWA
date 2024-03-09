import axiosInstance from '../../helpers/axiosinstance.js'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  // notes: [{ id: 1, text: 'Hello world' }]

  upload: []
}

export const AdminNotesUpload = createAsyncThunk(
  'admin/notes/upload-notes',

  async data => {
    console.log('hiiiii li aalo')

    try {
      const res =  await  axiosInstance.post('admin-notes/notes-upload', data)
      console.log('sanyam patil')
      toast.promise(res, {
        loading: 'Wait! creating',
        success: data => {
          return data?.data?.message
        },
        error: 'Failed to create'
      })
      console.log('data:>', data)

      return (await res).data
    } catch (error) {
      toast.error("nahi ")
    }
  }
)

export const notesSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNotes: (state, action) => {
      const note = {
        id: nanoid(),
        text: action.payload
      }
      state.notes.push(note)
    },
    removeNotes: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload)
    }
  }
})

export const { addNotes, removeNotes } = notesSlice.actions

export default notesSlice.reducer
