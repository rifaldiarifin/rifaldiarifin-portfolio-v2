import { configureStore } from '@reduxjs/toolkit'
import cihuyCodeReducer from './slices/cihuyCodeSlice'
import searchPopupReducer from './slices/searchPopupSlice'
import hotKeysReducer from './slices/hotKeysSlice'

const store = configureStore({
  reducer: {
    // reducers
    cihuyCode: cihuyCodeReducer,
    searchPopup: searchPopupReducer,
    hotKeys: hotKeysReducer
  }
})
export default store
