import { configureStore } from '@reduxjs/toolkit'
import landingSliceReducer from './slices/landingSlice'

const store = configureStore({
  reducer: {
    // reducers
    landingReducer: landingSliceReducer
  }
})

export default store
