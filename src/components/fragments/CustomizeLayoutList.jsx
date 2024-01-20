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
        leftIcon={'layout-menubar'}
        isActive
        label={'Visibility'}
        rightIcon={menuBar ? 'eye' : 'eye-closed'}
      />
      <CiSearchPopup.Li
        name={'Activity Bar'}
        callback={toggleActivityBar}
        moreClass="prim-click"
        leftIcon={'layout-activitybar-left'}
        rightIcon={primarySidebar.activityBar ? 'eye' : 'eye-closed'}
      />
      <CiSearchPopup.Li
        name={'Primary Side Bar'}
        callback={togglePrimarySidebar}
        leftIcon={'layout-sidebar-left'}
        moreClass="prim-click"
        rightIcon={primarySidebar.primaryBar ? 'eye' : 'eye-closed'}
      />
      <CiSearchPopup.Li
        name={'Secondary Side Bar'}
        callback={toggleSecondarySidebar}
        moreClass="secn-click"
        leftIcon={'layout-sidebar-right'}
        rightIcon={secondarySidebar ? 'eye' : 'eye-closed'}
      />
      <CiSearchPopup.Li
        name={'Panel'}
        callback={togglePanel}
        leftIcon={'layout-panel'}
        rightIcon={panel.panel ? 'eye' : 'eye-closed'}
      />
      <CiSearchPopup.Li
        name={'Status Bar'}
        callback={toggleStatusBar}
        leftIcon={'layout-statusbar'}
        rightIcon={statusBar ? 'eye' : 'eye-closed'}
      />
      <CiSearchPopup.Separator />
      <CiSearchPopup.Li
        name={'Left'}
        callback={turnOffSidebarReverse}
        isChecked={!sidebarReverse}
        leftIcon={'layout-sidebar-left'}
        label={'Primary Side Bar Position'}
      />
      <CiSearchPopup.Li
        name={'Right'}
        callback={turnOnSidebarReverse}
        isChecked={sidebarReverse}
        leftIcon={'layout-sidebar-right'}
      />
      <CiSearchPopup.Separator />
      <CiSearchPopup.Li
        name={'Full Screen'}
        callback={() => toggleFullScreen()}
        leftIcon={'screen-full'}
        label={'Modes'}
      />
    </>
  )
}

export default CustomizeLayoutList
