import { createSlice } from '@reduxjs/toolkit'

export const styleSlice = createSlice({
  name: 'style',
  initialState: {
    value: false
  },
  reducers: {
    change: state => {
      state.value = !state.value;
    }
  }
})

export const { change } = styleSlice.actions

export default styleSlice.reducer