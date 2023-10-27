import { useDocumentTitle } from '../hooks/useDocumentHandler'
import usePathName from '../hooks/usePathname'
import useExplorer from '../hooks/useExplorer'
import useCihuyCode from '../hooks/useCihuyCode'
import SectionBox from '../components/fragments/SectionBox'
import NavPage from '../components/fragments/NavPage'
import ReadDirectories from '../components/fragments/readDirectories'
import CihuyCodeLayout, {
  BtnIcon,
  CiEditorLayout,
  CiPanel,
  CiPrimarySidebar,
  CiSearchPopup,
  CiSecondarySidebar,
  CiStatusbar,
  CiTitleBar
} from '../components/layouts/CihuyCodeLayout'
import { Route, Routes } from 'react-router-dom'
import Welcome from './welcome'
import Readme from './readme'
import CommingSoon from './commingSoon'
import Page404 from './page404'
import DynamicDropdown from '../components/fragments/DynamicDropdown'
import { usePopupAlert } from '../contexts/PopupAlertContext'
import CustomizeLayoutList from '../components/fragments/customizeLayoutList'
import { useRef } from 'react'
import OpenViewList from '../components/fragments/OpenViewList'

const CihuyCode = () => {
  document.body.style.overflow = 'hidden'
  useDocumentTitle('Portfolio')
  usePathName()

  const titleBarRef = useRef(null)

  // Custom Popup Alert
  const popupAlert = usePopupAlert()

  // Explorer
  const { explorer, isLoading } = useExplorer()

  // Cihuy Code
  const {
    menuBar,
    statusBar,
    editorLayout,
    panel,
    primarySidebar,
    secondarySidebar,
    selected,
    loadDataStatus,
    handleCloseFile,
    findIndexActive,
    handleSelected,
    sidebarReverse,
    togglePanel,
    toggleActivityBar,
    togglePanelNavPage,
    togglePrimaryNavPage,
    togglePrimarySidebar,
    toggleSecondarySidebar,
    turnOnSidebarReverse,
    turnOffSidebarReverse,
    toggleMenuBar,
    toggleStatusBar,
    toggleSidebarReverse,
    toggleCustomizeLayout,
    resetView,
    toggleFullScreen,
    toggleCommandPallete,
    toggleOpenView,
    searchPopup,
    closeSearch,
    openNewWindow
  } = useCihuyCode({ explorer })

  const openPanel = (index) => {
    if (panel.navindex[index] === true || panel.panel === false) {
      togglePanel()
    }
    togglePanelNavPage(index)
  }

  const openAbout = () => {
    popupAlert({
      title: 'Cihuy Code',
      description: 'Version: 1.0.0, inspirate by Visual Studio Code App',
      alertType: 'message',
      alertStyle: 'info'
    })
  }

  return (
    <CihuyCodeLayout isSidebarReverse={sidebarReverse}>
      <CiTitleBar
        ref={titleBarRef}
        iconBar={'/img/logos/r/favicon-32x32.png'}
        menuBar={
          <>
            <CiTitleBar.Menu
              name={'File'}
              dpList={
                <>
                  <DynamicDropdown.Li name={'New Window'} callback={openNewWindow} />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Save'} disabled />
                  <DynamicDropdown.Li name={'Save As...'} disabled />
                  <DynamicDropdown.Li name={'Save All'} disabled />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Share'} disabled />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown
                    button={<DynamicDropdown.DyGroup name={'Appearance'} />}
                    position={'right-1'}
                    openOnHover
                  >
                    <>
                      <DynamicDropdown
                        button={<DynamicDropdown.DyGroup name={'Profiles (Default)'} />}
                        position={'right-1'}
                        openOnHover
                      >
                        <>
                          <DynamicDropdown.Li
                            name={'Default'}
                            leftIcon={'done'}
                            leftIconStyle="filled"
                            leftIconSize="14px"
                          />
                        </>
                      </DynamicDropdown>
                      <DynamicDropdown.Li name={'Settings'} disabled />
                      <DynamicDropdown.Li name={'Extensions'} callback={() => togglePrimaryNavPage(4)} />
                      <DynamicDropdown
                        button={<DynamicDropdown.DyGroup name={'Theme'} />}
                        position={'right-1'}
                        openOnHover
                      >
                        <>
                          <DynamicDropdown.Li name={'Color Theme'} />
                        </>
                      </DynamicDropdown>
                      <DynamicDropdown.Separator />
                      <DynamicDropdown.Li
                        name={'Settings Sync is On'}
                        leftIcon={'done'}
                        leftIconStyle="filled"
                        leftIconSize="14px"
                      />
                    </>
                  </DynamicDropdown>
                  <DynamicDropdown.Li name={'Preferences'} />
                </>
              }
            />
            <CiTitleBar.Menu
              name={'Edit'}
              dpList={
                <>
                  <DynamicDropdown.Li name={'Undo'} disabled />
                  <DynamicDropdown.Li name={'Redo'} disabled />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Cut'} disabled />
                  <DynamicDropdown.Li name={'Copy'} disabled />
                  <DynamicDropdown.Li name={'Paste'} disabled />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Find'} disabled />
                  <DynamicDropdown.Li name={'Replace'} disabled />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Find in Files'} disabled />
                  <DynamicDropdown.Li name={'Replace in Files'} disabled />
                </>
              }
            />
            <CiTitleBar.Menu
              name={'Selection'}
              dpList={
                <>
                  <DynamicDropdown.Li name={'Select All'} disabled />
                  <DynamicDropdown.Li name={'Expand Selection'} disabled />
                  <DynamicDropdown.Li name={'Shrink Selection'} disabled />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Copy Line Up'} disabled />
                  <DynamicDropdown.Li name={'Copy Line Down'} disabled />
                  <DynamicDropdown.Li name={'Move Line Up'} disabled />
                  <DynamicDropdown.Li name={'Move Line Down'} disabled />
                  <DynamicDropdown.Li name={'Duplicate Selection'} disabled />
                </>
              }
            />
            <CiTitleBar.Menu
              name={'View'}
              dpList={
                <>
                  <DynamicDropdown.Li name={'Command Pallete...'} callback={toggleCommandPallete} />
                  <DynamicDropdown.Li name={'Open View'} callback={toggleOpenView} />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown
                    button={<DynamicDropdown.DyGroup name={'Appearance'} />}
                    position={'right-1'}
                    openOnHover
                  >
                    <>
                      <DynamicDropdown.Li name={'Full Screen'} />
                      <DynamicDropdown.Separator />
                      <DynamicDropdown.Li
                        name={'Menu Bar'}
                        leftIcon={menuBar ? 'done' : null}
                        leftIconStyle="filled"
                        leftIconSize="14px"
                        callback={toggleMenuBar}
                      />
                      <DynamicDropdown.Li
                        name={'Primary Side Bar'}
                        leftIcon={primarySidebar.primaryBar ? 'done' : null}
                        leftIconStyle="filled"
                        leftIconSize="14px"
                        callback={togglePrimarySidebar}
                      />
                      <DynamicDropdown.Li
                        name={'Secondary Side Bar'}
                        leftIcon={secondarySidebar ? 'done' : null}
                        leftIconStyle="filled"
                        leftIconSize="14px"
                        callback={toggleSecondarySidebar}
                      />
                      <DynamicDropdown.Li
                        name={'Status Bar'}
                        leftIcon={statusBar ? 'done' : null}
                        leftIconStyle="filled"
                        leftIconSize="14px"
                        callback={toggleStatusBar}
                      />
                      <DynamicDropdown.Li
                        name={'Activity Bar'}
                        leftIcon={primarySidebar.activityBar ? 'done' : null}
                        leftIconStyle="filled"
                        leftIconSize="14px"
                        callback={toggleActivityBar}
                      />
                      <DynamicDropdown.Li
                        name={'Panel'}
                        leftIcon={panel.panel ? 'done' : null}
                        leftIconStyle="filled"
                        leftIconSize="14px"
                        callback={togglePanel}
                      />
                      <DynamicDropdown.Separator />
                      <DynamicDropdown.Li
                        name={`Move Side Bar ${sidebarReverse ? 'Left' : 'Right'}`}
                        callback={toggleSidebarReverse}
                      />
                    </>
                  </DynamicDropdown>
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Explorer'} callback={() => togglePrimaryNavPage(0)} />
                  <DynamicDropdown.Li name={'Search'} callback={() => togglePrimaryNavPage(1)} />
                  <DynamicDropdown.Li name={'Source Control'} callback={() => togglePrimaryNavPage(2)} />
                  <DynamicDropdown.Li name={'Run'} callback={() => togglePrimaryNavPage(3)} />
                  <DynamicDropdown.Li name={'Extensions'} callback={() => togglePrimaryNavPage(4)} />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Problems'} callback={() => openPanel(0)} />
                  <DynamicDropdown.Li name={'Output'} callback={() => openPanel(1)} />
                  <DynamicDropdown.Li name={'Debug Console'} callback={() => openPanel(2)} />
                  <DynamicDropdown.Li name={'Terminal'} callback={() => openPanel(3)} />
                </>
              }
            />
            <CiTitleBar.Menu
              name={'Help'}
              dpList={
                <>
                  <DynamicDropdown.Li name={'Welcome'} disabled />
                  <DynamicDropdown.Li name={'Show All Commands'} callback={toggleCommandPallete} />
                  <DynamicDropdown.Li name={'Documentation'} disabled />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Check for Updates...'} disabled />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'About'} callback={openAbout} />
                </>
              }
            />
          </>
        }
        rightSide={
          <>
            <CiTitleBar.Btnbar
              icon={'show-left-side-panel'}
              isActive={sidebarReverse ? secondarySidebar : primarySidebar.primaryBar}
              onClick={sidebarReverse ? toggleSecondarySidebar : togglePrimarySidebar}
            />
            <CiTitleBar.Btnbar icon={'show-bottom-panel'} isActive={panel.panel} onClick={togglePanel} />
            <CiTitleBar.Btnbar
              icon={'show-right-side-panel'}
              isActive={sidebarReverse ? primarySidebar.primaryBar : secondarySidebar}
              onClick={sidebarReverse ? togglePrimarySidebar : toggleSecondarySidebar}
            />
            <CiTitleBar.Btnbar icon={'dashboard-layout'} onClick={toggleCustomizeLayout} />
          </>
        }
      />
      <CiPrimarySidebar
        activityActive={primarySidebar.activityBar}
        primaryActive={primarySidebar.primaryBar}
        findIndexActive={findIndexActive}
        buttonNavPages={
          <>
            <CiPrimarySidebar.BtnNav
              icon={'documents'}
              isActive={primarySidebar.navindex[0]}
              onClick={() => togglePrimaryNavPage(0)}
            />
            <CiPrimarySidebar.BtnNav
              icon={'search'}
              isActive={primarySidebar.navindex[1]}
              onClick={() => togglePrimaryNavPage(1)}
            />
            <CiPrimarySidebar.BtnNav
              icon={'play'}
              isActive={primarySidebar.navindex[2]}
              onClick={() => togglePrimaryNavPage(2)}
            />
            <CiPrimarySidebar.BtnNav
              icon={'code-fork'}
              isActive={primarySidebar.navindex[3]}
              onClick={() => togglePrimaryNavPage(3)}
            />
            <CiPrimarySidebar.BtnNav
              icon={'puzzle'}
              isActive={primarySidebar.navindex[4]}
              onClick={() => togglePrimaryNavPage(4)}
            />
          </>
        }
        buttonOptions={
          <>
            <CiPrimarySidebar.BtnOption
              icon={'male-user'}
              dpList={
                <>
                  <DynamicDropdown.Li name={'rifaldiarifin (GitHub)'} />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li
                    name={'Settings Sync is On'}
                    leftIcon={'done'}
                    leftIconStyle="filled"
                    leftIconSize="14px"
                  />
                </>
              }
              position={sidebarReverse ? 'left-2' : 'right-2'}
            />
            <CiPrimarySidebar.BtnOption
              icon={'settings'}
              dpList={
                <>
                  <DynamicDropdown.Li name={'Command Pallete...'} callback={toggleCommandPallete} />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown
                    button={<DynamicDropdown.DyGroup name={'Profiles (Default)'} />}
                    position={'right-1'}
                    openOnHover
                  >
                    <>
                      <DynamicDropdown.Li
                        name={'Default'}
                        leftIcon={'done'}
                        leftIconStyle="filled"
                        leftIconSize="14px"
                      />
                    </>
                  </DynamicDropdown>
                  <DynamicDropdown.Li name={'Settings'} />
                  <DynamicDropdown.Li name={'Extensions'} callback={() => togglePrimaryNavPage(4)} />
                  <DynamicDropdown button={<DynamicDropdown.DyGroup name={'Theme'} />} position={'right-1'} openOnHover>
                    <>
                      <DynamicDropdown.Li name={'Color Theme'} />
                    </>
                  </DynamicDropdown>
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li
                    name={'Settings Sync is On'}
                    leftIcon={'done'}
                    leftIconStyle="filled"
                    leftIconSize="14px"
                  />
                  <DynamicDropdown.Separator />
                  <DynamicDropdown.Li name={'Check for Updates...'} />
                </>
              }
              position={sidebarReverse ? 'left-2' : 'right-2'}
            />
          </>
        }
        navPages={
          <>
            <NavPage name={'EXPLORER'} isActive={primarySidebar.navindex[0]} isLoading={isLoading}>
              <SectionBox name={'RIFALDIARIFIN'} isActive minHeight={'calc(100vh - 178px)'}>
                {explorer && explorer?.children?.length > 0 ? (
                  <ReadDirectories
                    root={explorer}
                    currentSelected={selected}
                    callback={(file) => handleSelected(file)}
                  />
                ) : explorer && explorer?.children?.length === 0 ? (
                  <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">{'Nothing :('}</p>
                ) : (
                  <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Please Wait...</p>
                )}
              </SectionBox>
              <SectionBox name={'OUTLINE'}></SectionBox>
              <SectionBox name={'TIMELINE'}></SectionBox>
            </NavPage>
            <NavPage name={'SEARCH'} isActive={primarySidebar.navindex[1]}></NavPage>
            <NavPage name={'RUN AND DEBUG: RUN'} isActive={primarySidebar.navindex[2]}></NavPage>
            <NavPage name={'SOURCE CONTROL'} isActive={primarySidebar.navindex[3]}>
              <SectionBox name={'SOURCE CONTROL'} isActive>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
              <SectionBox name={'COMMITS'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
              <SectionBox name={'BRANCHES'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
              <SectionBox name={'REMOTES'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
              <SectionBox name={'STASHES'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
              <SectionBox name={'TAGS'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
              <SectionBox name={'WORKTREES'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
              <SectionBox name={'CONTRIBUTORS'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
            </NavPage>
            <NavPage name={'EXTENSION'} isActive={primarySidebar.navindex[4]}>
              <SectionBox name={'INSTALLED'} isActive>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
              <SectionBox name={'RECOMMENDED'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox>
            </NavPage>
          </>
        }
      ></CiPrimarySidebar>
      <CiSecondarySidebar isActive={secondarySidebar} onClose={toggleSecondarySidebar} />
      <CiEditorLayout
        editorStatus={loadDataStatus && editorLayout.openedFiles?.length}
        isActiveDirectory={editorLayout.currentlyOpen?.directory}
        onOpenShortcut={() => handleSelected(explorer.children[0].children[1])}
        menuBar={
          <>
            {!isLoading &&
              editorLayout.openedFiles.map((file, index) => (
                <CiEditorLayout.Menubar
                  key={file.directory}
                  name={file.name}
                  currentlyOpenDirectory={editorLayout.currentlyOpen?.directory}
                  directory={file.directory}
                  onClick={(event) => handleSelected(file, event)}
                  onClose={(event) => handleCloseFile(index, event)}
                />
              ))}
          </>
        }
        btnOptions={
          <>
            <BtnIcon icon="compare-git" />
            <BtnIcon icon="more" iconStyle={'filled'} iconSize="16px" />
          </>
        }
        directory={<>{!isLoading && <CiEditorLayout.Directory directory={editorLayout.currentlyOpen?.directory} />}</>}
      >
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/readme" element={<Readme />} />
          <Route path="/blog" element={<CommingSoon />} />
          <Route path="/commingsoon" element={<CommingSoon />} />
          <Route path="/page404" element={<Page404 />} />
        </Routes>
      </CiEditorLayout>
      <CiPanel
        isActive={panel.panel}
        menuBar={
          <>
            <CiPanel.Menubar name={'PROBLEMS'} isActive={panel.navindex[0]} onClick={() => togglePanelNavPage(0)} />
            <CiPanel.Menubar name={'OUTPUT'} isActive={panel.navindex[1]} onClick={() => togglePanelNavPage(1)} />
            <CiPanel.Menubar
              name={'DEBUG CONSOLE'}
              isActive={panel.navindex[2]}
              onClick={() => togglePanelNavPage(2)}
            />
            <CiPanel.Menubar name={'TERMINAL'} isActive={panel.navindex[3]} onClick={() => togglePanelNavPage(3)} />
            <CiPanel.Menubar name={'PORTS'} isActive={panel.navindex[4]} onClick={() => togglePanelNavPage(4)} />
          </>
        }
        onClose={togglePanel}
      />
      <CiStatusbar isActive={statusBar} />

      <CiSearchPopup
        label={searchPopup.label}
        allowLabel={searchPopup.allowLabel}
        allowSearch={searchPopup.allowSearch}
        isActive={searchPopup.isActive}
        toolButton={<CiSearchPopup.btnTool icon={'reboot'} onClick={resetView} />}
        onClose={toggleCustomizeLayout}
        titleBarRef={titleBarRef}
        onOutsideClick={closeSearch}
        closeOnOutsideClick={searchPopup.actionName === 'CUSTOMIZE_LAYOUT' ? false : true}
      >
        {searchPopup.actionName === 'CUSTOMIZE_LAYOUT' ? (
          <CustomizeLayoutList
            menuBar={menuBar}
            panel={panel}
            primarySidebar={primarySidebar}
            secondarySidebar={secondarySidebar}
            sidebarReverse={sidebarReverse}
            statusBar={statusBar}
            toggleActivityBar={toggleActivityBar}
            toggleFullScreen={toggleFullScreen}
            toggleMenuBar={toggleMenuBar}
            togglePanel={togglePanel}
            togglePrimarySidebar={togglePrimarySidebar}
            toggleSecondarySidebar={toggleSecondarySidebar}
            toggleStatusBar={toggleStatusBar}
            turnOffSidebarReverse={turnOffSidebarReverse}
            turnOnSidebarReverse={turnOnSidebarReverse}
          />
        ) : searchPopup.actionName === 'OPEN_VIEW' ? (
          <OpenViewList togglePanelNavPage={togglePanelNavPage} togglePrimaryNavPage={togglePrimaryNavPage} />
        ) : searchPopup.actionName === 'COMMAND_PALLETE' ? (
          <></>
        ) : searchPopup.actionName === 'SEARCH_FILE' ? (
          <></>
        ) : null}
      </CiSearchPopup>
    </CihuyCodeLayout>
  )
}

export default CihuyCode
