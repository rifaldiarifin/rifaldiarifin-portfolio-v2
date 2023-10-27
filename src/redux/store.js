import { configureStore } from '@reduxjs/toolkit'
import cihuyCodeReducer from './slices/cihuyCodeSlice'
import searchPopupReducer from './slices/searchPopupSlice'

const store = configureStore({
  reducer: {
    // reducers
    cihuyCode: cihuyCodeReducer,
    searchPopup: searchPopupReducer
  }
})

export default store
