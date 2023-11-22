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
        navindex: [true, false, false]
      },
      sidebarReverse: false,
      colorTheme: 'cihuy-code-dark',
      secondarySidebar: false,
      panel: {
        panel: false,
        navindex: [false, true, false]
      },
      statusBar: true,
      selected: null,
      settingSync: true,
      editorLayout: {
        openedFiles: [],
        currentlyOpen: null,
        wordWrap: false
      }
    }
  },
  reducers: {
    syncData: (state, action) => {
      state.data = action.payload
    },
    setColorTheme: (state, action) => {
      state.data.colorTheme = action.payload
    },
    tgglWordWrap: (state) => {
      state.data.editorLayout.wordWrap = !state.data.editorLayout.wordWrap
    },
    tgglSettingSync: (state) => {
      state.data.settingSync = !state.data.settingSync
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
    closeAll: (state) => {
      state.data.selected = null
      state.data.editorLayout.openedFiles = []
      state.data.editorLayout.currentlyOpen = null
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
      const findData = () => {
        switch (action.payload.type) {
          case 'file':
            return state.data.editorLayout.openedFiles.findIndex((find) => find.directory === action.payload.directory)
          case 'paginated file':
            return state.data.editorLayout.openedFiles.findIndex((find) => find.directory === action.payload.directory)
          case 'page':
            return state.data.editorLayout.openedFiles.findIndex((find) => find.to === action.payload.to)
          default:
            throw new Error(`Error while open the file: Unknown type file "${action.payload.type}"`)
        }
      }
      const find = findData()
      state.data.editorLayout.currentlyOpen = action.payload
      if (find !== -1) return
      state.data.editorLayout.openedFiles.push(action.payload)
    },
    closeFile: (state, action) => {
      const find = state.data.editorLayout.openedFiles.findIndex(
        (find) => find.uuid === state.data.editorLayout.currentlyOpen?.uuid
      )
      state.data.editorLayout.openedFiles.splice(action.payload, 1)
      if (find !== action.payload) return
      if (action.payload === 0 && state.data.editorLayout.openedFiles.length === 0) {
        state.data.selected = null
        state.data.editorLayout.currentlyOpen = null
        return
      }
      if (action.payload === 0 && state.data.editorLayout.openedFiles.length > 0) {
        state.data.selected = state.data.editorLayout.openedFiles[0].directory
        state.data.editorLayout.currentlyOpen = state.data.editorLayout.openedFiles[0]
        return
      }
      state.data.selected = state.data.editorLayout.openedFiles[action.payload - 1]?.directory
      state.data.editorLayout.currentlyOpen = state.data.editorLayout.openedFiles[action.payload - 1]
    }
  }
})

export const {
  syncData,
  openFile,
  closeFile,
  hndlSelected,
  setColorTheme,
  tgglSettingSync,
  tgglWordWrap,
  tgglPanel,
  tgglPanelNavPage,
  tgglPrimNavPage,
  tgglActivityBar,
  tgglPrimSidebar,
  tgglSecondSidebar,
  tgglSidebarReverse,
  trnOffSidebarReverse,
  trnOnSidebarReverse,
  closeAll,
  tgglMenuBar,
  tgglStatusBar,
  resetEditorView
} = cihuySlice.actions
export default cihuySlice.reducer
