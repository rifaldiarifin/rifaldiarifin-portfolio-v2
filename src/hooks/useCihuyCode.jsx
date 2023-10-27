import { useDispatch, useSelector } from 'react-redux'
import {
  closeFile,
  hndlSelected,
  openFile,
  syncData,
  tgglActivityBar,
  tgglPanel,
  tgglPanelNavPage,
  tgglSidebarReverse,
  tgglPrimNavPage,
  tgglPrimSidebar,
  tgglSecondSidebar,
  trnOnSidebarReverse,
  trnOffSidebarReverse,
  tgglStatusBar,
  tgglMenuBar,
  resetEditorView
} from '../redux/slices/cihuyCodeSlice'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  closeSearchPopup,
  openCommandPallete,
  openCustomizeLayout,
  openOpenView,
  openSearchFile
} from '../redux/slices/searchPopupSlice'

const useCihuyCode = ({ explorer }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const codeData = useSelector((state) => state.cihuyCode.data)
  const searchPopup = useSelector((state) => state.searchPopup.data)
  const [loadDataStatus, setLoadDataStatus] = useState(false)

  const closeSearch = () => {
    dispatch(closeSearchPopup())
  }
  const toggleCustomizeLayout = () => {
    if (searchPopup.isActive && searchPopup.actionName === 'CUSTOMIZE_LAYOUT') return dispatch(closeSearchPopup())
    dispatch(openCustomizeLayout())
  }
  const toggleCommandPallete = () => {
    if (searchPopup.isActive && searchPopup.actionName === 'COMMAND_PALLETE') return dispatch(closeSearchPopup())
    dispatch(openCommandPallete())
  }
  const toggleOpenView = () => {
    if (searchPopup.isActive && searchPopup.actionName === 'OPEN_VIEW') return dispatch(closeSearchPopup())
    dispatch(openOpenView())
  }
  const toggleSearchFile = () => {
    if (searchPopup.isActive && searchPopup.actionName === 'SEARCH_FILE') return dispatch(closeSearchPopup())
    dispatch(openSearchFile())
  }
  const toggleActivityBar = () => {
    dispatch(tgglActivityBar())
  }
  const togglePrimarySidebar = () => {
    dispatch(tgglPrimSidebar())
  }
  const toggleSidebarReverse = () => {
    dispatch(tgglSidebarReverse())
  }
  const turnOnSidebarReverse = () => {
    dispatch(trnOnSidebarReverse())
  }
  const turnOffSidebarReverse = () => {
    dispatch(trnOffSidebarReverse())
  }
  const findIndexActive = () => {
    return codeData.primarySidebar.navindex.findIndex((find) => find === true)
  }
  const findPathnameDirectory = (to, explorer) => {
    let file = {
      name: 'page404.jsx',
      type: 'file',
      directory: null,
      to: '/page404',
      children: null
    }
    const loop = (folder) => {
      for (let x = 0; x < folder.children.length; x++) {
        if (folder.children[x].to !== '/' && folder.children[x].to === to) {
          return (file = folder.children[x])
        }
        if (folder.children[x].children && folder.children[x].children?.length > 0) loop(folder.children[x])
      }
    }
    loop(explorer)
    return file
  }
  const togglePrimaryNavPage = (index, closeNavIfMatch = true) => {
    if (
      closeNavIfMatch === true &&
      (codeData.primarySidebar.navindex[index] === true || codeData.primarySidebar.primaryBar === false)
    ) {
      dispatch(tgglPrimSidebar())
    }
    if (closeNavIfMatch === false && codeData.primarySidebar.primaryBar === false) dispatch(tgglPrimSidebar())
    dispatch(tgglPrimNavPage(index))
  }
  const togglePanel = () => {
    dispatch(tgglPanel())
  }
  const togglePanelNavPage = (index, closeNavIfMatch = true) => {
    if (closeNavIfMatch === true && (codeData.panel.navindex[index] === true || codeData.panel.panel === false)) {
      dispatch(tgglPanel())
    }
    if (codeData.panel.panel === false) dispatch(tgglPanel())
    dispatch(tgglPanelNavPage(index))
  }
  const toggleSecondarySidebar = () => {
    dispatch(tgglSecondSidebar())
  }
  const toggleMenuBar = () => {
    dispatch(tgglMenuBar())
  }
  const toggleStatusBar = () => {
    dispatch(tgglStatusBar())
  }
  const handleSelected = (file) => {
    if (file.type === 'file' || file.type === 'paginated file') dispatch(openFile(file))
    if (file.to) navigate(file.to, { replace: true })
    dispatch(hndlSelected(file.directory))
  }
  const handleCloseFile = (index) => {
    dispatch(closeFile(index))
  }
  const resetView = () => {
    dispatch(resetEditorView())
  }
  const closeFullScreen = () => {
    const refs =
      document.exitFullscreen ||
      document.webkitCancelFullScreen ||
      document.mozCancelFullScreen ||
      document.msExitFullScreen

    if (refs) {
      refs.call(document)
    } else if (typeof window.ActiveXObject !== 'undefined') {
      // eslint-disable-next-line no-undef
      const wscript = new ActiveXObject('WScript.Shell')
      if (wscript !== null) {
        wscript.SendKeys('{F11}')
      }
    }
  }
  const requestFullScreen = (element) => {
    const refs =
      element.requestFullScreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullScreen

    if (refs) {
      refs.call(element)
    } else if (typeof window.ActiveXObject !== 'undefined') {
      // eslint-disable-next-line no-undef
      const wscript = new ActiveXObject('WScript.Shell')
      if (wscript !== null) {
        wscript.SendKeys('{F11}')
      }
    }
    return false
  }

  const toggleFullScreen = (element) => {
    if (!element) element = document.documentElement

    const isInFullScreen =
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      document.mozFullScreen ||
      document.webkitIsFullScreen
    if (isInFullScreen) {
      closeFullScreen()
    } else {
      requestFullScreen(element)
    }
    return false
  }

  const closeCihuyCode = () => {
    window.opener = null
    window.open('', '_self')
    window.close()
  }

  const openNewWindow = () => {
    window.open('/', '_blank')
  }

  useEffect(() => {
    if (!loadDataStatus) return
    if (codeData.editorLayout.currentlyOpen?.to) {
      return navigate(codeData.editorLayout.currentlyOpen?.to, { replace: true })
    } else {
      return navigate('/', { replace: true })
    }
  }, [codeData.editorLayout.currentlyOpen])

  useEffect(() => {
    if (!loadDataStatus || !explorer) return
    if (window.location.pathname === '/') {
      const welcome = explorer.children[0].children[0].children[0]
      handleSelected(welcome)
    } else {
      const find = findPathnameDirectory(window.location.pathname, explorer)
      handleSelected(find)
    }
  }, [explorer, loadDataStatus])

  useEffect(() => {
    if (!loadDataStatus && explorer) {
      const loadData = () => {
        const getData = localStorage.getItem('SAVE_DATA_CIHUY_CODE')
        if (!getData) return
        dispatch(syncData(JSON.parse(getData)))
      }
      loadData()
      setLoadDataStatus(true)
    }
  }, [dispatch, explorer, loadDataStatus])

  useEffect(() => {
    if (loadDataStatus && explorer) {
      const saveData = () => {
        localStorage.setItem('SAVE_DATA_CIHUY_CODE', JSON.stringify(codeData))
      }
      saveData()
    }
  }, [codeData, explorer, loadDataStatus])

  return {
    menuBar: codeData.menuBar,
    primarySidebar: codeData.primarySidebar,
    secondarySidebar: codeData.secondarySidebar,
    panel: codeData.panel,
    selected: codeData.selected,
    editorLayout: codeData.editorLayout,
    sidebarReverse: codeData.sidebarReverse,
    statusBar: codeData.statusBar,
    loadDataStatus,
    findIndexActive,
    handleSelected,
    handleCloseFile,
    toggleCustomizeLayout,
    togglePanel,
    togglePanelNavPage,
    togglePrimaryNavPage,
    toggleActivityBar,
    togglePrimarySidebar,
    toggleSecondarySidebar,
    toggleSidebarReverse,
    turnOnSidebarReverse,
    turnOffSidebarReverse,
    toggleMenuBar,
    toggleStatusBar,
    resetView,
    toggleFullScreen,
    toggleCommandPallete,
    toggleOpenView,
    toggleSearchFile,
    searchPopup,
    closeSearch,
    closeCihuyCode,
    openNewWindow
  }
}

export default useCihuyCode
