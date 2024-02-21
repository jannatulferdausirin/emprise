import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'jannat',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
     
      state.value ++
    },
    
  }
})


export const { increment } = counterSlice.actions

export default counterSlice.reducer