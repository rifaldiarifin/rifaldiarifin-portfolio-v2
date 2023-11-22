import { CiSearchPopup } from '../layouts/CihuyCodeLayout'

const OpenViewList = ({ togglePrimaryNavPage, togglePanelNavPage }) => {
  return (
    <>
      <CiSearchPopup.Li
        moreClass="prim-click"
        isActive
        callback={() => togglePrimaryNavPage(0, false)}
        name={'Explorer'}
        label={'Side Bar'}
      />
      <CiSearchPopup.Li moreClass="prim-click" callback={() => togglePrimaryNavPage(1, false)} name={'Search'} />
      <CiSearchPopup.Li moreClass="prim-click" callback={() => togglePrimaryNavPage(2, false)} name={'Extensions'} />
      <CiSearchPopup.Separator />
      <CiSearchPopup.Li callback={() => togglePanelNavPage(0, false)} name={'Problems'} label={'Panel'} />
      <CiSearchPopup.Li callback={() => togglePanelNavPage(1, false)} name={'Terminal'} />
      <CiSearchPopup.Li callback={() => togglePanelNavPage(2, false)} name={'Ports'} />
    </>
  )
}

export default OpenViewList
