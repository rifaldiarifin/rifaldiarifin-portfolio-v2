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
  resetEditorView,
  tgglSettingSync,
  setColorTheme,
  closeAll,
  tgglWordWrap
} from '../redux/slices/cihuyCodeSlice'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  closeSearchPopup,
  openColorTheme,
  openCommandPallete,
  openCustomizeLayout,
  openListOfColorTheme,
  openOpenView,
  openOpenedEditor,
  openSearchFile
} from '../redux/slices/searchPopupSlice'
import usePathName from './usePathname'
import { useToastNotification } from '../contexts/ToastNotificationContext'

const useCihuyCode = ({ explorer, extensionPages, primarySidebarRef, secondarySidebarRef, titleBarRef }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const codeData = useSelector((state) => state.cihuyCode.data)
  const searchPopup = useSelector((state) => state.searchPopup.data)
  const pathname = usePathName()
  const [fullPanel, setFullPanel] = useState(false)
  const [loadDataStatus, setLoadDataStatus] = useState(false)
  const [prepare, setPrepare] = useState(true)
  const refOnceLoad = useRef(false)
  const editorBody = useRef(null)

  // Custom Toast Notification
  const toast = useToastNotification()

  const toggleSettingSync = () => {
    dispatch(tgglSettingSync())
  }
  const toggleWordWrap = () => {
    console.log('hahahah')
    dispatch(tgglWordWrap())
  }
  const closeSearch = () => {
    dispatch(closeSearchPopup())
  }
  const toggleOpenedEditor = () => {
    if (searchPopup.isActive && searchPopup.actionName === 'CUSTOMIZE_LAYOUT') return dispatch(closeSearchPopup())
    dispatch(openOpenedEditor())
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
  const toggleColorTheme = () => {
    if (searchPopup.isActive && searchPopup.actionName === 'COLOR_THEME') return dispatch(closeSearchPopup())
    dispatch(openColorTheme())
  }
  const toggleListOfColorTheme = (nameTheme = '') => {
    dispatch(openListOfColorTheme(nameTheme))
  }
  const setTheme = (payload) => {
    dispatch(setColorTheme(payload))
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
      uuid: 'file-not-found-404',
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
  const toggleFullPanel = () => {
    setFullPanel(!fullPanel)
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
    if (file.type === 'file' || file.type === 'paginated file' || file.type === 'page') dispatch(openFile(file))
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

  const closeAllFile = () => {
    dispatch(closeAll())
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
    if (!loadDataStatus || !explorer || !extensionPages) return
    if (pathname[0] === '') {
      const welcome = explorer.children[0].children[0].children[0]
      handleSelected(welcome)
    } else if (pathname.length === 3 && pathname[0] === 'extension') {
      const find = extensionPages.find((find) => find.publisher === pathname[1] && find.name === pathname[2])
      handleSelected({
        uuid: find ? find?.uuid : 'extension-not-found-404',
        name: `Extension: ${find ? find?.displayName : pathname[2]}`,
        type: 'page',
        directory: null,
        to: `/extension/${pathname[1]}/${pathname[2]}`,
        children: null
      })
    } else {
      const find = findPathnameDirectory(`/${pathname[0]}`, explorer)
      handleSelected(find)
    }
  }, [extensionPages, explorer, loadDataStatus])

  useEffect(() => {
    if (codeData.colorTheme.toString().includes('dark')) return document.body.classList.add('dark')
    document.body.classList.remove('dark')
  }, [codeData.colorTheme])

  useEffect(() => {
    if (!loadDataStatus && explorer) {
      const loadData = () => {
        if (!codeData.settingSync) return
        const getData = localStorage.getItem('SAVE_DATA_CIHUY_CODE')
        if (!getData) return
        dispatch(syncData(JSON.parse(getData)))
      }
      loadData()
      setLoadDataStatus(true)
      setTimeout(() => {
        setPrepare(false)
      }, 2300)
      if (window.innerWidth < 520) {
        toast({
          title: 'We recomended open this on Desktop :D',
          source: 'For Experience',
          type: 'info'
        })
      }
    }
  }, [dispatch, explorer, loadDataStatus])

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth > 520) return
      if (codeData.primarySidebar.primaryBar) togglePrimarySidebar()
      if (codeData.primarySidebar.activityBar) toggleActivityBar()
    }
    if (!refOnceLoad.current && loadDataStatus) {
      checkScreen()
      return () => (refOnceLoad.current = true)
    }
    if (loadDataStatus) {
      window.addEventListener('resize', checkScreen)
      return () => window.removeEventListener('resize', checkScreen)
    }
  }, [codeData.primarySidebar.primaryBar, codeData.primarySidebar.activityBar, loadDataStatus])

  useEffect(() => {
    if (loadDataStatus && explorer && codeData.settingSync) {
      const saveData = () => {
        localStorage.setItem('SAVE_DATA_CIHUY_CODE', JSON.stringify(codeData))
      }
      saveData()
    }
  }, [codeData, explorer, loadDataStatus])

  // Primary Outside Click
  useEffect(() => {
    if (primarySidebarRef.current) {
      const handlePrimarySidebarClick = (event) => {
        if (
          !primarySidebarRef.current.contains(event.target) &&
          !titleBarRef.current.contains(event.target) &&
          !event.target.classList.contains('prim-click') &&
          window.innerWidth <= 1160 &&
          codeData.primarySidebar.primaryBar === true
        )
          togglePrimarySidebar()
      }
      document.addEventListener('click', handlePrimarySidebarClick)
      return () => document.removeEventListener('click', handlePrimarySidebarClick)
    }
  }, [primarySidebarRef.current, titleBarRef.current, codeData.primarySidebar.primaryBar])

  // Secondary Outside Click
  useEffect(() => {
    if (secondarySidebarRef.current) {
      const handleSecondarySidebarClick = (event) => {
        if (
          !secondarySidebarRef.current.contains(event.target) &&
          !titleBarRef.current.contains(event.target) &&
          !event.target.classList.contains('secn-click') &&
          window.innerWidth <= 1160 &&
          codeData.secondarySidebar === true
        )
          toggleSecondarySidebar()
      }
      document.addEventListener('click', handleSecondarySidebarClick)
      return () => document.removeEventListener('click', handleSecondarySidebarClick)
    }
  }, [secondarySidebarRef.current, titleBarRef.current, codeData.secondarySidebar])

  return {
    menuBar: codeData.menuBar,
    primarySidebar: codeData.primarySidebar,
    secondarySidebar: codeData.secondarySidebar,
    panel: codeData.panel,
    selected: codeData.selected,
    editorLayout: codeData.editorLayout,
    sidebarReverse: codeData.sidebarReverse,
    statusBar: codeData.statusBar,
    settingSync: codeData.settingSync,
    colorTheme: codeData.colorTheme,
    fullPanel,
    loadDataStatus,
    prepare,
    setPrepare,
    toast,
    findIndexActive,
    handleSelected,
    handleCloseFile,
    toggleSettingSync,
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
    toggleOpenedEditor,
    resetView,
    toggleFullScreen,
    toggleCommandPallete,
    toggleOpenView,
    toggleSearchFile,
    toggleFullPanel,
    toggleWordWrap,
    toggleListOfColorTheme,
    searchPopup,
    closeSearch,
    closeAllFile,
    closeCihuyCode,
    openNewWindow,
    toggleColorTheme,
    setTheme,
    editorBody
  }
}

export default useCihuyCode
