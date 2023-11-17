import { CiSearchPopup } from '../layouts/CihuyCodeLayout'

const CustomizeLayoutList = ({
  toggleActivityBar,
  toggleMenuBar,
  togglePrimarySidebar,
  toggleSecondarySidebar,
  togglePanel,
  toggleStatusBar,
  turnOffSidebarReverse,
  turnOnSidebarReverse,
  menuBar,
  primarySidebar,
  secondarySidebar,
  sidebarReverse,
  panel,
  statusBar,
  toggleFullScreen
}) => {
  return (
    <>
      <CiSearchPopup.Li
        name={'Menu Bar'}
        callback={toggleMenuBar}
        leftIcon={'navigation-toolbar-top'}
        isActive
        label={'Visibility'}
        rightIcon={menuBar ? 'eye' : 'hide'}
      />
      <CiSearchPopup.Li
        name={'Activity Bar'}
        callback={toggleActivityBar}
        moreClass="prim-click"
        leftIcon={'show-left-side-panel'}
        rightIcon={primarySidebar.activityBar ? 'eye' : 'hide'}
      />
      <CiSearchPopup.Li
        name={'Primary Side Bar'}
        callback={togglePrimarySidebar}
        leftIcon={'show-left-side-panel'}
        moreClass="prim-click"
        rightIcon={primarySidebar.primaryBar ? 'eye' : 'hide'}
      />
      <CiSearchPopup.Li
        name={'Secondary Side Bar'}
        callback={toggleSecondarySidebar}
        moreClass="secn-click"
        leftIcon={'show-right-side-panel'}
        rightIcon={secondarySidebar ? 'eye' : 'hide'}
      />
      <CiSearchPopup.Li
        name={'Panel'}
        callback={togglePanel}
        leftIcon={'show-bottom-panel'}
        rightIcon={panel.panel ? 'eye' : 'hide'}
      />
      <CiSearchPopup.Li
        name={'Status Bar'}
        callback={toggleStatusBar}
        leftIcon={'navigation-toolbar-bottom'}
        rightIcon={statusBar ? 'eye' : 'hide'}
      />
      <CiSearchPopup.Separator />
      <CiSearchPopup.Li
        name={'Left'}
        callback={turnOffSidebarReverse}
        isChecked={!sidebarReverse}
        leftIcon={'show-left-side-panel'}
        label={'Primary Side Bar Position'}
      />
      <CiSearchPopup.Li
        name={'Right'}
        callback={turnOnSidebarReverse}
        isChecked={sidebarReverse}
        leftIcon={'show-right-side-panel'}
      />
      <CiSearchPopup.Separator />
      <CiSearchPopup.Li
        name={'Full Screen'}
        callback={() => toggleFullScreen()}
        leftIcon={'full-page-view'}
        label={'Modes'}
      />
    </>
  )
}

export default CustomizeLayoutList
