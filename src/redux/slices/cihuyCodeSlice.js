import { createSlice } from '@reduxjs/toolkit'
import { switchBooleanOfArray } from '../../utils/switchBooleanOfArray'

const cihuySlice = createSlice({
  name: 'cihuySlice',
  initialState: {
    data: {
      menuBar: true,
      primarySidebar: {
        activityBar: true,
        primaryBar: true,
        navindex: [true, false, false, false, false]
      },
      sidebarReverse: false,
      secondarySidebar: false,
      panel: {
        panel: false,
        navindex: [false, false, false, true, false]
      },
      statusBar: true,
      selected: null,
      editorLayout: {
        openedFiles: [],
        currentlyOpen: null
      }
    }
  },
  reducers: {
    syncData: (state, action) => {
      state.data = action.payload
    },
    tgglMenuBar: (state) => {
      state.data.menuBar = !state.data.menuBar
    },
    tgglActivityBar: (state) => {
      state.data.primarySidebar.activityBar = !state.data.primarySidebar.activityBar
    },
    tgglPrimSidebar: (state) => {
      state.data.primarySidebar.primaryBar = !state.data.primarySidebar.primaryBar
    },
    tgglPrimNavPage: (state, action) => {
      state.data.primarySidebar.navindex = switchBooleanOfArray(action.payload, state.data.primarySidebar.navindex)
    },
    tgglPanel: (state) => {
      state.data.panel.panel = !state.data.panel.panel
    },
    tgglPanelNavPage: (state, action) => {
      state.data.panel.navindex = switchBooleanOfArray(action.payload, state.data.panel.navindex)
    },
    tgglSecondSidebar: (state) => {
      state.data.secondarySidebar = !state.data.secondarySidebar
    },
    tgglSidebarReverse: (state) => {
      state.data.sidebarReverse = !state.data.sidebarReverse
    },
    trnOnSidebarReverse: (state) => {
      state.data.sidebarReverse = true
    },
    trnOffSidebarReverse: (state) => {
      state.data.sidebarReverse = false
    },
    hndlSelected: (state, action) => {
      state.data.selected = action.payload
    },
    tgglStatusBar: (state) => {
      state.data.statusBar = !state.data.statusBar
    },
    resetEditorView: (state) => {
      state.data.menuBar = true
      state.data.primarySidebar.activityBar = true
      state.data.primarySidebar.primaryBar = true
      state.data.secondarySidebar = false
      state.data.panel.panel = false
      state.data.sidebarReverse = false
      state.data.statusBar = true
    },
    openFile: (state, action) => {
      const find = state.data.editorLayout.openedFiles.findIndex((find) => find.directory === action.payload.directory)
      state.data.editorLayout.currentlyOpen = action.payload
      if (find !== -1) return
      state.data.editorLayout.openedFiles.push(action.payload)
    },
    closeFile: (state, action) => {
      const find = state.data.editorLayout.openedFiles.findIndex(
        (find) => find.directory === state.data.editorLayout.currentlyOpen?.directory
      )
      state.data.editorLayout.openedFiles.splice(action.payload, 1)
      if (find !== action.payload) return
      if (action.payload === 0 && state.data.editorLayout.openedFiles.length === 0) {
        state.data.selected = null
        state.data.editorLayout.currentlyOpen = null
        return
      }
      if (state.data.editorLayout.openedFiles[0]) {
        state.data.selected = state.data.editorLayout.openedFiles[0].directory
        state.data.editorLayout.currentlyOpen = state.data.editorLayout.openedFiles[0]
        return
      }
      state.data.editorLayout.currentlyOpen = state.data.editorLayout.openedFiles[action.payload - 1]
    }
  }
})

export const {
  syncData,
  openFile,
  closeFile,
  hndlSelected,
  tgglPanel,
  tgglPanelNavPage,
  tgglPrimNavPage,
  tgglActivityBar,
  tgglPrimSidebar,
  tgglSecondSidebar,
  tgglSidebarReverse,
  trnOffSidebarReverse,
  trnOnSidebarReverse,
  tgglMenuBar,
  tgglStatusBar,
  resetEditorView
} = cihuySlice.actions
export default cihuySlice.reducer
