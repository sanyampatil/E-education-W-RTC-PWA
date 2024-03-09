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
      const res = axiosInstance.post('/admin-notes/notes-upload', data)
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
      toast.error('nahi zal re ')
    }
  }
)

export const fetchNotes = createAsyncThunk(
  'admin/notes/upload-notes',
  async data => {

    console.log('daga', data)
    try {
      const res = axiosInstance.get(`/admin-notes/fetch-Notes/${data}`)

      console.log('aalo')
      toast.promise(res, {
        loading: 'Wait! to load your notes',

        success: data => {
          return data?.data?.message
        },
        error: 'Failed to load your notes'
      })

      console.log('response fetchNotes', res)

      return (await res).data
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
)

export const notesSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    // addNotes: (state, action) => {
    //   const note = {
    //     id: nanoid(),
    //     text: action.payload
    //   }
    //   state.notes.push(note)
    // },
    // removeNotes: (state, action) => {
    //   state.notes = state.notes.filter(note => note.id !== action.payload)
    // }
  },

  extraReducers: builder => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      localStorage.setItem(
        'upload',
        JSON.stringify(action?.payload?.noteupload)
      )
        state.upload = action?.payload?.noteupload
    })
  }
})

// export const { addNotes, removeNotes } = notesSlice.actions

export default notesSlice.reducer
