import { useDocumentTitle } from '../hooks/useDocumentHandler'
import useExplorer from '../hooks/useExplorer'
import useCihuyCode from '../hooks/useCihuyCode'
import SectionBox from '../components/fragments/SectionBox'
import NavPage from '../components/fragments/NavPage'
import ReadDirectories from '../components/fragments/readDirectories'
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
import ColorThemeList from '../components/fragments/ColorThemeList'
import Extension from './extension'
import useExtensionPages from '../hooks/useExtensionPages'
import ExtensionLi from '../components/fragments/ExtensionLi'
import { fileObject } from '../utils/fileObject'
import useSearchFilter from '../hooks/useSearchFilter'
import ResultFile from '../components/fragments/ResultFile'
import { predictClass } from '../utils/predictClass'
import Button from '../components/Elements/Button'
import CihuyTerm from '../components/fragments/CihuyTerm'
import MainFile from './mainfile'
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

const CihuyCode = () => {
  // document.body.style.overflow = 'hidden'
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
    searchPopup,
    closeSearch,
    closeAllFile,
    openNewWindow,
    toggleColorTheme,
    toggleOpenedEditor,
    setTheme,
    colorTheme,
    fullPanel
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
    <CihuyCodeLayout
      isSidebarReverse={sidebarReverse}
      activityActive={primarySidebar.activityBar}
      primaryActive={primarySidebar.primaryBar}
      secondaryActive={secondarySidebar}
      panelActive={panel.panel}
      statusbarActive={statusBar}
      theme={colorTheme || 'cihuy-code-dark'}
      isFullPanel={fullPanel}
      // theme={'light-visual-studio'}
    >
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
                        callback={() => togglePrimaryNavPage(3)}
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
                  <DynamicDropdown.Li name={'Source Control'} callback={() => togglePrimaryNavPage(2)} />
                  <DynamicDropdown.Li name={'Extensions'} callback={() => togglePrimaryNavPage(3)} />
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
        ref={primarySidebarRef}
        findIndexActive={findIndexActive}
        activityActive={primarySidebar.primaryBar}
        buttonNavPages={
          <>
            <CiPrimarySidebar.BtnNav
              icon={'documents'}
              isActive={primarySidebar.navindex[0] && primarySidebar.primaryBar}
              onClick={() => togglePrimaryNavPage(0)}
            />
            <CiPrimarySidebar.BtnNav
              icon={'search'}
              isActive={primarySidebar.navindex[1] && primarySidebar.primaryBar}
              onClick={() => togglePrimaryNavPage(1)}
            />
            <CiPrimarySidebar.BtnNav
              icon={'code-fork'}
              isActive={primarySidebar.navindex[2] && primarySidebar.primaryBar}
              onClick={() => togglePrimaryNavPage(2)}
            />
            <CiPrimarySidebar.BtnNav
              icon={'puzzle'}
              isActive={primarySidebar.navindex[3] && primarySidebar.primaryBar}
              onClick={() => togglePrimaryNavPage(3)}
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
                  <DynamicDropdown.Li name={'Extensions'} callback={() => togglePrimaryNavPage(3)} />
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
              <SectionBox name={'RIFALDIARIFIN'} isActive minHeight={'calc(100vh - 180px)'}>
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
                  <NavPage.BtnHead icon="reboot" disabled={searchResult.length === 0} />
                  <NavPage.BtnHead
                    icon="delete-list"
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
            {/* <NavPage name={'RUN AND DEBUG: RUN'} isActive={primarySidebar.navindex[2]}></NavPage> */}
            <NavPage name={'SOURCE CONTROL'} isActive={primarySidebar.navindex[2]}>
              <SectionBox name={'SOURCE CONTROL'} isActive>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">{'Sorry for making you hope :('}</p>
              </SectionBox>
              <SectionBox name={'COMMITS'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">{'One day I will make it :D'}</p>
              </SectionBox>
              <SectionBox name={'BRANCHES'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">
                  {'For now, just focus on the portfolio.'}
                </p>
              </SectionBox>
              <SectionBox name={'REMOTES'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">
                  {'You know what? It only took me 3 weeks to make my portfolio. long?'}
                </p>
              </SectionBox>
              <SectionBox name={'STASHES'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">{'Nothing :('}</p>
              </SectionBox>
              <SectionBox name={'TAGS'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">{'Nothing.'}</p>
              </SectionBox>
              <SectionBox name={'WORKTREES'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">{'Nothing.'}</p>
              </SectionBox>
              <SectionBox name={'CONTRIBUTORS'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">{'Nothing.'}</p>
              </SectionBox>
            </NavPage>
            <NavPage name={'EXTENSION'} isActive={primarySidebar.navindex[3]} isLoading={extensionPages === false}>
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
              {/* <SectionBox name={'RECOMMENDED'}>
                <p className="font-size-14 pad-x-30 pad-y-10 disabled-text-2">Nothing.</p>
              </SectionBox> */}
            </NavPage>
          </>
        }
      ></CiPrimarySidebar>
      <CiSecondarySidebar onClose={toggleSecondarySidebar} ref={secondarySidebarRef} />
      <CiEditorLayout
        editorStatus={loadDataStatus && editorLayout.openedFiles?.length}
        isActiveDirectory={editorLayout.currentlyOpen?.directory}
        onOpenShortcut={() => handleSelected(explorer.children[0].children[1])}
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
                  onClick={(event) => handleSelected(file, event)}
                  onClose={(event) => handleCloseFile(index, event)}
                />
              ))}
          </>
        }
        btnOptions={
          <>
            <DynamicDropdown
              button={<BtnIcon icon="more" iconStyle={'filled'} iconSize="16px" />}
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
        <Routes>
          <Route path="/" element={<MainFile />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/readme" element={<Readme />} />
          <Route path="/blog" element={<CommingSoon />} />
          <Route path="/extension/:publisher/:extensionName" element={<Extension extensions={extensionPages} />} />
          <Route path="/commingsoon" element={<CommingSoon />} />
          <Route
            path="/page404"
            element={<Page404 onOpenShortcut={() => handleSelected(explorer.children[0].children[1])} />}
          />
        </Routes>
      </CiEditorLayout>
      <CiPanel
        menuBar={
          <>
            <CiPanel.Menubar name={'PROBLEMS'} isActive={panel.navindex[0]} onClick={() => togglePanelNavPage(0)} />
            <CiPanel.Menubar name={'TERMINAL'} isActive={panel.navindex[1]} onClick={() => togglePanelNavPage(1)} />
            <CiPanel.Menubar name={'PORTS'} isActive={panel.navindex[2]} onClick={() => togglePanelNavPage(2)} />
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
            <Button style={'fill'} color="default" height={'32px'} onClick={forwardPort}>
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
            <CiSearchPopup.btnTool icon={'reboot'} onClick={resetView} moreClass={'prim-click secn-click'} />
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
        ) : null}
      </CiSearchPopup>
      <CiToastNotification />
    </CihuyCodeLayout>
  )
}

export default CihuyCode
