import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  notes: [{ id: 1, text: 'Hello world' }]
}

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
