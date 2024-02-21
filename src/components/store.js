import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'

export default configureStore({
  reducer: {
    jannat:counterSlice ,
  }
})