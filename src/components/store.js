import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import travellerSlice from './slices/travellerSlice'

export default configureStore({
  reducer: {
    jannat:counterSlice ,
    irin:travellerSlice,
  }
})