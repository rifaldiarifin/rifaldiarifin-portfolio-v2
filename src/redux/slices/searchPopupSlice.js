import { createSlice } from '@reduxjs/toolkit'

const searchPopupSlice = createSlice({
  name: 'searchPopupSlice',
  initialState: {
    data: {
      allowLabel: true,
      allowSearch: true,
      isActive: false,
      label: 'Hello World',
      actionName: 'HELLO_WORLD'
    }
  },
  reducers: {
    openCustomizeLayout: (state) => {
      state.data.actionName = 'CUSTOMIZE_LAYOUT'
      state.data.allowLabel = true
      state.data.allowSearch = false
      state.data.isActive = true
      state.data.label = 'Customize Layout'
    },
    openOpenView: (state) => {
      state.data.actionName = 'OPEN_VIEW'
      state.data.allowLabel = false
      state.data.allowSearch = true
      state.data.isActive = true
      state.data.label = 'Open View'
    },
    openCommandPallete: (state) => {
      state.data.actionName = 'COMMAND_PALLETE'
      state.data.allowLabel = false
      state.data.allowSearch = true
      state.data.isActive = true
      state.data.label = 'Command Pallete'
    },
    openSearchFile: (state) => {
      state.data.actionName = 'SEARCH_FILE'
      state.data.allowLabel = false
      state.data.allowSearch = true
      state.data.isActive = true
      state.data.label = 'Search File'
    },
    closeSearchPopup: (state) => {
      state.data.isActive = false
    }
  }
})

export const { closeSearchPopup, openCustomizeLayout, openCommandPallete, openOpenView, openSearchFile } =
  searchPopupSlice.actions
export default searchPopupSlice.reducer
