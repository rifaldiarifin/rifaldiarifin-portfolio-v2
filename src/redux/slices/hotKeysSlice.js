import { createSlice } from '@reduxjs/toolkit'

const hotKeysSlice = createSlice({
  name: 'hotKeysSlice',
  initialState: {
    data: []
  },
  reducers: {
    pushHotKey: (state, action) => {
      if (typeof action.payload !== 'string') throw new Error('hotKey payload must be a string!')
      state.data.push(action.payload)
    },
    resetHotKey: (state) => {
      state.data = []
    }
  }
})

export const { pushHotKey, resetHotKey } = hotKeysSlice.actions
export default hotKeysSlice.reducer
