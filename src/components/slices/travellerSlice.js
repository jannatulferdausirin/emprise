import { createSlice } from '@reduxjs/toolkit'

export const travellerSlice = createSlice({
  name: 'irin',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
    
      state.value ++
    },
    decrement: (state) => {
     if( state.value > 0){
        state.value--
     }
    },
    
  },
})


export const { increment, decrement} =  travellerSlice.actions

export default  travellerSlice.reducer