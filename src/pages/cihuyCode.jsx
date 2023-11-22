import { Route, Routes } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentHandler'
import useExplorer from '../hooks/useExplorer'
import useCihuyCode from '../hooks/useCihuyCode'
import SectionBox from '../components/fragments/SectionBox'
import NavPage from '../components/fragments/NavPage'
import ReadDirectories from '../components/fragments/readDirectories'
import DynamicDropdown from '../components/fragments/DynamicDropdown'
import { usePopupAlert } from '../contexts/PopupAlertContext'
import CustomizeLayoutList from '../components/fragments/customizeLayoutList'
import React, { Suspense, useRef } from 'react'
import OpenViewList from '../components/fragments/OpenViewList'
import ColorThemeList from '../components/fragments/ColorThemeList'
import useExtensionPages from '../hooks/useExtensionPages'
import ExtensionLi from '../components/fragments/ExtensionLi'
import { fileObject } from '../utils/fileObject'
import useSearchFilter from '../hooks/useSearchFilter'
import ResultFile from '../components/fragments/ResultFile'
import { predictClass } from '../utils/predictClass'
import Button from '../components/Elements/Button'
import CihuyTerm from '../components/fragments/CihuyTerm'
import '../assets/icons8/fluent/main.css'
import '../assets/fonts/Fira_Code_v6.2/fira_code.css'
import '../assets/fonts/JetBrainsMono-2.304/main.css'
import '../assets/fonts/googlefonts/Montserrat/main.css'
import CihuyCodeLayout, {
  BtnIcon,
  CiEditorLayout,
  CiPanel,
  CiPrimarySidebar,
  CiSearchPopup,
  CiSecondarySidebar,
  CiStatusbar,
  CiTitleBar,
  CiToastNotification
} from '../components/layouts/CihuyCodeLayout'
import Prepare from '../components/fragments/Prepare.jsx'
const MainFile = React.lazy(() => import('./mainfile.jsx'))
const Welcome = React.lazy(() => import('./welcome.jsx'))
const Readme = React.lazy(() => import('./readme.jsx'))
const Page404 = React.lazy(() => import('./page404.jsx'))
const Extension = React.lazy(() => import('./extension.jsx'))


const CihuyCode = () => {
  useDocumentTitle('Portfolio')
  const titleBarRef = useRef(null)
  const primarySidebarRef = useRef(null)
  const secondarySidebarRef = useRef(null)
  // Custom Popup Alert
  const popupAlert = usePopupAlert()
  // Explorer
  const { explorer, dataFiles, isLoading } = useExplorer()
  // Extension Pages
  const extensionPages = useExtensionPages()
  // Search Filter
  const { searchInput, searchResult, setSearchInput, dismisResult } = useSearchFilter((input, curr) => {
    return curr.name.includes(input)
  }, dataFiles)
  // Cihuy Code
  const {
    menuBar,
    statusBar,
    editorLayout,
    panel,
    toast,
    primarySidebar,
    secondarySidebar,
    selected,
    loadDataStatus,
    handleCloseFile,
    settingSync,
    findIndexActive,
    handleSelected,
    sidebarReverse,
    toggleSettingSync,
    togglePanel,
    toggleActivityBar,
    toggleListOfColorTheme,
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
    toggleFullPanel,
    toggleWordWrap,
    searchPopup,
    closeSearch,
    closeAllFile,
    openNewWindow,
    toggleColorTheme,
    toggleOpenedEditor,
    setTheme,
    colorTheme,
    fullPanel,
    editorBody,
    prepare
  } = useCihuyCode({ explorer, extensionPages, primarySidebarRef, secondarySidebarRef, titleBarRef })
  // useHotKeys([
  //   {
  //     keys: [['Control', 'Shift', 'P']],
  //     action: () => console.log('Command Pallete!')
  //   }
  // ])
  const openPanel = (index) => {
    if (panel.navindex[index] === true || panel.panel === false) {
      togglePanel()
    }
    togglePanelNavPage(index)
  }

  const openAbout = () => {
    popupAlert({
      title: 'Cihuy Code',
      description: `Version: 1.0.0, 
inspired by Visual Studio Code App`,
      alertType: 'message',
      alertStyle: 'info'
    })
  }
  const goToGithub = (event) => {
    console.log(event)
    window.open('https://github.com/rifaldiarifin', '_blank')
  }
  const checkUpdate = () => {
    toast({
      title: 'No updates available.',
      source: 'Update System',
      type: 'info'
    })
  }
  const forwardPort = () => {
    toast({
      title: `Don't take serious, sorry hahaha.`,
      source: 'Forward Port',
      type: 'error'
    })
  }
  const openExtension = (extension) => {
    handleSelected(
      fileObject({
        uuid: extension.uuid,
        name: `Extension: ${extension.displayName}`,
        children: null,
        directory: null,
        type: 'page',
        to: `/extension/${extension.publisher}/${extension.name}`
      })
    )
  }
  return (
    <>
      {/* {!loadDataStatus && <Prepare />} */}
      <CihuyCodeLayout
        isSidebarReverse={sidebarReverse}
        activityActive={primarySidebar.activityBar}
        primaryActive={primarySidebar.primaryBar}
        secondaryActive={secondarySidebar}
        panelActive={panel.panel}
        statusbarActive={statusBar}
        theme={colorTheme || 'cihuy-code-dark'}
        isFullPanel={fullPanel}
        wordWrap={editorLayout.wordWrap}
      >
        {prepare && <Prepare />}

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
                      button={<DynamicDropdown.DyGroup name={'Preferences'} />}
                      position={'right-1'}
                      openOnHover
                      moreClass={'file-dp-titlebar'}
                    >
                      <>
                        <DynamicDropdown
                          button={<DynamicDropdown.DyGroup name={'Profiles (Default)'} />}
                          position={'right-1'}
                          moreClass={'file-dp-titlebar'}
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
                        <DynamicDropdown.Li
                          name={'Extensions'}
                          callback={() => togglePrimaryNavPage(2)}
                          moreClass={'prim-click'}
                        />
                        <DynamicDropdown
                          button={<DynamicDropdown.DyGroup name={'Theme'} />}
                          position={'right-1'}
                          moreClass={'file-dp-titlebar'}
                          openOnHover
                        >
                          <>
                            <DynamicDropdown.Li name={'Color Theme'} callback={toggleColorTheme} />
                          </>
                        </DynamicDropdown>
                        <DynamicDropdown.Separator />
                        <DynamicDropdown.Li
                          name={'Settings Sync is On'}
                          callback={toggleSettingSync}
                          leftIcon={settingSync ? 'done' : null}
                          leftIconStyle="filled"
                          leftIconSize="14px"
                        />
                      </>
                    </DynamicDropdown>
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
                      moreClass={'file-dp-titlebar'}
                    >
                      <>
                        <DynamicDropdown.Li name={'Full Screen'} callback={() => toggleFullScreen()} />
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
                    <DynamicDropdown.Li name={'Extensions'} callback={() => togglePrimaryNavPage(2)} />
                    <DynamicDropdown.Separator />
                    <DynamicDropdown.Li name={'Problems'} callback={() => openPanel(0)} />
                    <DynamicDropdown.Li name={'Terminal'} callback={() => openPanel(1)} />
                    <DynamicDropdown.Separator />
                    <DynamicDropdown.Li name={'Word Wrap'} callback={toggleWordWrap} />
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
                    <DynamicDropdown.Li name={'Check for Updates...'} callback={checkUpdate} />
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
                ariaLabel="Toggle primarybar"
                icon={'show-left-side-panel'}
                isActive={sidebarReverse ? secondarySidebar : primarySidebar.primaryBar}
                onClick={sidebarReverse ? toggleSecondarySidebar : togglePrimarySidebar}
              />
              <CiTitleBar.Btnbar
                ariaLabel="Toggle panel"
                icon={'show-bottom-panel'}
                isActive={panel.panel}
                onClick={togglePanel}
              />
              <CiTitleBar.Btnbar
                ariaLabel="Toggle secondarybar"
                icon={'show-right-side-panel'}
                isActive={sidebarReverse ? primarySidebar.primaryBar : secondarySidebar}
                onClick={sidebarReverse ? togglePrimarySidebar : toggleSecondarySidebar}
              />
              <CiTitleBar.Btnbar icon={'dashboard-layout'} onClick={toggleCustomizeLayout} ariaLabel="Toggle customize layout" />
            </>
          }
        />
        <CiPrimarySidebar
          ref={primarySidebarRef}
          findIndexActive={findIndexActive}
          activityActive={primarySidebar.primaryBar}
          buttonNavPages={
            <>
              <CiPrimarySidebar.BtnNav
                ariaLabel="Toggle Explorer"
                icon={'documents'}
                isActive={primarySidebar.navindex[0] && primarySidebar.primaryBar}
                onClick={() => togglePrimaryNavPage(0)}
              />
              <CiPrimarySidebar.BtnNav
                ariaLabel="Toggle Search"
                icon={'search'}
                isActive={primarySidebar.navindex[1] && primarySidebar.primaryBar}
                onClick={() => togglePrimaryNavPage(1)}
              />
              <CiPrimarySidebar.BtnNav
                ariaLabel="Toggle Extensions"
                icon={'puzzle'}
                isActive={primarySidebar.navindex[2] && primarySidebar.primaryBar}
                onClick={() => togglePrimaryNavPage(2)}
              />
            </>
          }
          buttonOptions={
            <>
              <CiPrimarySidebar.BtnOption
                icon={'male-user'}
                dpList={
                  <>
                    <DynamicDropdown.Li name={'rifaldiarifin (GitHub)'} callback={goToGithub} />
                    <DynamicDropdown.Separator />
                    <DynamicDropdown.Li
                      name={'Settings Sync is On'}
                      callback={toggleSettingSync}
                      leftIcon={settingSync ? 'done' : null}
                      leftIconStyle="filled"
                      leftIconSize="14px"
                    />
                  </>
                }
                ariaLabel="Toggle Accounts"
                position={sidebarReverse ? 'left-2' : 'right-2'}
              />
              <CiPrimarySidebar.BtnOption
                icon={'settings'}
                ariaLabel="Toggle Settings"
                dpList={
                  <>
                    <DynamicDropdown.Li name={'Command Pallete...'} callback={toggleCommandPallete} moreClass={'btn-searchpopup'} />
                    <DynamicDropdown.Separator />
                    <DynamicDropdown
                      button={<DynamicDropdown.DyGroup name={'Profiles (Default)'} />}
                      position={'right-1'}
                      openOnHover
                      moreClass={'top-dp'}
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
                    <DynamicDropdown.Li name={'Extensions'} callback={() => togglePrimaryNavPage(2)} />
                    <DynamicDropdown
                      button={<DynamicDropdown.DyGroup name={'Theme'} />}
                      position={'right-1'}
                      openOnHover
                      moreClass={'top-dp'}
                    >
                      <>
                        <DynamicDropdown.Li
                          name={'Color Theme'}
                          moreClass={'btn-searchpopup'}
                          callback={toggleColorTheme}
                        />
                      </>
                    </DynamicDropdown>
                    <DynamicDropdown.Separator />
                    <DynamicDropdown.Li
                      name={'Settings Sync is On'}
                      callback={toggleSettingSync}
                      leftIcon={settingSync ? 'done' : null}
                      leftIconStyle="filled"
                      leftIconSize="14px"
                    />
                    <DynamicDropdown.Separator />
                    <DynamicDropdown.Li name={'Check for Updates...'} callback={checkUpdate} />
                  </>
                }
                position={sidebarReverse ? 'left-2' : 'right-2'}
              />
            </>
          }
          navPages={
            <>
              <NavPage name={'EXPLORER'} isActive={primarySidebar.navindex[0]} isLoading={isLoading}>
                <SectionBox name={'RIFALDIARIFIN'} isActive minHeight={'calc(100vh - 158px - var(--statusbar))'}>
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
              <NavPage
                name={'SEARCH'}
                allowInput
                isActive={primarySidebar.navindex[1]}
                ariaLabel="Search"
                placeHolder="Search"
                moreClass={'search-navpage'}
                onInput={(event) => setSearchInput(event.target.value)}
                Buttons={
                  <>
                    <NavPage.BtnHead icon="reboot" disabled={searchResult.length === 0} ariaLabel={'research search'} />
                    <NavPage.BtnHead
                      icon="delete-list"
                      ariaLabel="clear search"
                      disabled={searchResult.length === 0}
                      onClick={() => setSearchInput('')}
                    />
                  </>
                }
              >
                <div className="nav-body">
                  <p>
                    {searchInput.length > 0 && searchResult.length > 0
                      ? `${searchResult.length} result`
                      : searchInput.length > 0 && searchResult.length === 0
                        ? 'No result found.'
                        : ''}
                  </p>
                  {searchResult &&
                    searchResult.map((file, index) => (
                      <ResultFile
                        key={file.uuid}
                        name={file.name}
                        index={index}
                        onDismisFile={() => dismisResult(index)}
                        onClickFile={() => handleSelected(file)}
                      />
                    ))}
                </div>
              </NavPage>
              <NavPage name={'EXTENSION'} isActive={primarySidebar.navindex[2]} isLoading={extensionPages === false}>
                <SectionBox name={'INSTALLED'} isActive>
                  {typeof extensionPages !== 'string' && extensionPages.length > 0 ? (
                    <>
                      {extensionPages.map((extension) => (
                        <ExtensionLi
                          key={extension.uuid}
                          displayName={extension.displayName}
                          description={extension.description}
                          icon={extension.icon}
                          publisher={extension.publisher}
                          onClick={() => openExtension(extension)}
                        />
                      ))}
                    </>
                  ) : typeof extensionPages !== 'string' && extensionPages.length === 0 ? (
                    <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">You don&apos;t have any installed.</p>
                  ) : extensionPages === 'ERROR' ? (
                    <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">{'Oops.. Something when wrong :('}</p>
                  ) : null}
                </SectionBox>
              </NavPage>
            </>
          }
        ></CiPrimarySidebar>
        <CiSecondarySidebar onClose={toggleSecondarySidebar} ref={secondarySidebarRef} />
        <CiEditorLayout
          editorStatus={!prepare && loadDataStatus && editorLayout.openedFiles?.length}
          isActiveDirectory={editorLayout.currentlyOpen?.directory}
          onOpenShortcut={() => handleSelected(explorer.children[0].children[1])}
          ref={editorBody}
          menuBar={
            <>
              {!isLoading &&
                editorLayout.openedFiles.map((file, index) => (
                  <CiEditorLayout.Menubar
                    key={`${file.directory}-${file.to}`}
                    name={file.name}
                    currentlyOpen={editorLayout.currentlyOpen}
                    directory={file.directory}
                    to={file.to}
                    ariaLabel={`File {file.name}`}
                    onClick={(event) => handleSelected(file, event)}
                    onClose={(event) => handleCloseFile(index, event)}
                  />
                ))}
            </>
          }
          btnOptions={
            <>
              <DynamicDropdown
                button={<BtnIcon icon="more" iconStyle={'filled'} iconSize="16px" ariaLabel={'Toggle options editor'} />}
                position={'bottom-1'}
              >
                <DynamicDropdown.Li
                  name={'Show Opened Editor'}
                  callback={toggleOpenedEditor}
                  moreClass={'btn-searchpopup'}
                />
                <DynamicDropdown.Separator />
                <DynamicDropdown.Li name={'Close All'} callback={closeAllFile} />
              </DynamicDropdown>
            </>
          }
          directory={<>{!isLoading && <CiEditorLayout.Directory directory={editorLayout.currentlyOpen?.directory} />}</>}
        >
          <Suspense fallback={<span className='loader'></span>}>
            <Routes>
              <Route path="/" element={<MainFile currentlyOpen={editorLayout.currentlyOpen} ref={editorBody} />} />
              <Route path="/welcome" element={<Welcome currentlyOpen={editorLayout.currentlyOpen} ref={editorBody} />} />
              <Route path="/readme" element={<Readme />} />
              <Route
                path="/extension/:publisher/:extensionName"
                element={
                  <Extension
                    extensions={extensionPages}
                    toast={toast}
                    toggleListOfColorTheme={toggleListOfColorTheme}
                  />
                }
              />
              <Route
                path="/page404"
                element={<Page404 onOpenShortcut={() => handleSelected(explorer.children[0].children[1])} />}
              />
            </Routes>
          </Suspense>
        </CiEditorLayout>
        <CiPanel
          menuBar={
            <>
              <CiPanel.Menubar name={'PROBLEMS'} isActive={panel.navindex[0]} onClick={() => togglePanelNavPage(0)} ariaLabel={'Toggle Problems'} />
              <CiPanel.Menubar name={'TERMINAL'} isActive={panel.navindex[1]} onClick={() => togglePanelNavPage(1)} ariaLabel={'Toggle Terminal'} />
              <CiPanel.Menubar name={'PORTS'} isActive={panel.navindex[2]} onClick={() => togglePanelNavPage(2)} ariaLabel={'Toggle Ports'} />
            </>
          }
          onClose={togglePanel}
          isFullPanel={fullPanel}
          onFullPanel={toggleFullPanel}
        >
          <div className={`panel-navpage problems${predictClass(() => panel.navindex[0])}`}>
            No problems have been detected.
          </div>
          <div className={`panel-navpage terminal${predictClass(() => panel.navindex[1])}`}>
            <CihuyTerm />
          </div>
          <div className={`panel-navpage ports${predictClass(() => panel.navindex[2])}`}>
            <div className="box dsp-flex fl-colm gap-14 mrgn-t-10">
              <p>No forwared ports. Forward a port to access your locally running services over internet.</p>
              <Button style={'fill'} color="default" height={'32px'} onClick={forwardPort} ariaLabel='Forward Port'>
                Forward a Port
              </Button>
            </div>
          </div>
        </CiPanel>
        <CiStatusbar onClickProblems={() => openPanel(0)} onClickPorts={() => openPanel(2)} />

        <CiSearchPopup
          label={searchPopup.label}
          allowLabel={searchPopup.allowLabel}
          allowSearch={searchPopup.allowSearch}
          isActive={searchPopup.isActive}
          toolButton={
            searchPopup.actionName === 'CUSTOMIZE_LAYOUT' && (
              <CiSearchPopup.btnTool icon={'reboot'} onClick={resetView} moreClass={'prim-click secn-click'} ariaLabel={'reset layout'} />
            )
          }
          onClose={closeSearch}
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
            <>
              <CiSearchPopup.Li
                name={'New Window'}
                callback={openNewWindow}
                keyCode={[['Ctrl', 'Shift', 'N']]}
                closeAfterClick={closeSearch}
              />
              <CiSearchPopup.Li name={'Close Window'} keyCode={[['Alt', 'F4']]} closeAfterClick={closeSearch} />
              <CiSearchPopup.Li
                name={'Customize Layout...'}
                callback={toggleCustomizeLayout}
                moreClass="btn-searchpopup"
                closeAfterClick={closeSearch}
              />
              <CiSearchPopup.Li
                name={'Code: Check for Updates...'}
                callback={checkUpdate}
                closeAfterClick={closeSearch}
              />
              <CiSearchPopup.Li
                name={'Extensions: Check for Extension Updates...'}
                callback={checkUpdate}
                closeAfterClick={closeSearch}
              />
              <CiSearchPopup.Li
                name={'View: Close All Editors'}
                keyCode={[
                  ['Ctrl', 'K'],
                  ['Ctrl', 'W']
                ]}
                callback={closeAllFile}
                closeAfterClick={closeSearch}
              />
              <CiSearchPopup.Li
                name={'View: Open View'}
                callback={toggleOpenView}
                closeAfterClick={closeSearch}
                moreClass="btn-searchpopup"
              />
              <CiSearchPopup.Li
                name={'View: Toggle Full Screen'}
                callback={() => toggleFullScreen()}
                closeAfterClick={closeSearch}
              />
              <CiSearchPopup.Li name={'View: Reset View'} callback={resetView} closeAfterClick={closeSearch} />
              <CiSearchPopup.Li
                name={'Preferences: Color Theme'}
                keyCode={[
                  ['Ctrl', 'K'],
                  ['Ctrl', 'T']
                ]}
                callback={toggleColorTheme}
                closeAfterClick={closeSearch}
                moreClass="btn-searchpopup"
              />
              <CiSearchPopup.Li name={'Preferences: Toggle between Light/Dark Themes'} closeAfterClick={closeSearch} />
              <CiSearchPopup.Li
                name={'Show All Commands'}
                keyCode={[['Ctrl', 'Shift', 'P']]}
                closeAfterClick={closeSearch}
                moreClass="btn-searchpopup"
              />
            </>
          ) : searchPopup.actionName === 'SEARCH_FILE' ? (
            <></>
          ) : searchPopup.actionName === 'COLOR_THEME' ? (
            <ColorThemeList currentTheme={colorTheme} setTheme={setTheme} closeAfterClick={closeSearch} />
          ) : searchPopup.actionName === 'OPENED_EDITOR' ? (
            <>
              {editorLayout.openedFiles
                ? editorLayout.openedFiles.map((file) => (
                  <CiSearchPopup.Li
                    key={file.uuid}
                    name={file.name}
                    closeAfterClick={closeSearch}
                    isChecked={editorLayout.currentlyOpen?.uuid === file.uuid}
                    callback={() => handleSelected(file)}
                  />
                ))
                : null}
            </>
          ) : searchPopup.actionName === 'LIST_OF_COLOR_THEME' ? (
            <>
              {searchPopup.label === 'Cihuy Theme' ? (
                <>
                  <CiSearchPopup.Li
                    name={'Cihuy Code Light'}
                    rightIcon={'settings'}
                    callback={() => setTheme('cihuy-code-light')}
                    closeAfterClick={closeSearch}
                  />
                  <CiSearchPopup.Li
                    name={'Cihuy Code Dark'}
                    rightIcon={'settings'}
                    callback={() => setTheme('cihuy-code-dark')}
                    closeAfterClick={closeSearch}
                  />
                </>
              ) : searchPopup.label === '2077 theme' ? (
                <>
                  <CiSearchPopup.Li
                    name={'2077'}
                    rightIcon={'settings'}
                    callback={() => setTheme('dark-2077')}
                    closeAfterClick={closeSearch}
                  />
                </>
              ) : null}
            </>
          ) : null}
        </CiSearchPopup>
        <CiToastNotification />
      </CihuyCodeLayout>
    </>
  )
}

export default CihuyCode
