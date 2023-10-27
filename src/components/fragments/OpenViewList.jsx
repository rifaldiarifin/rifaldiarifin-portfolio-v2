import { CiSearchPopup } from '../layouts/CihuyCodeLayout'

const OpenViewList = ({ togglePrimaryNavPage, togglePanelNavPage }) => {
  return (
    <>
      <CiSearchPopup.Li isActive callback={() => togglePrimaryNavPage(0, false)} name={'Explorer'} label={'Side Bar'} />
      <CiSearchPopup.Li callback={() => togglePrimaryNavPage(1, false)} name={'Search'} />
      <CiSearchPopup.Li callback={() => togglePrimaryNavPage(2, false)} name={'Run and Debug'} />
      <CiSearchPopup.Li callback={() => togglePrimaryNavPage(3, false)} name={'Source Control'} />
      <CiSearchPopup.Li callback={() => togglePrimaryNavPage(4, false)} name={'Extensions'} />
      <CiSearchPopup.Separator />
      <CiSearchPopup.Li callback={() => togglePanelNavPage(0, false)} name={'Problems'} label={'Panel'} />
      <CiSearchPopup.Li callback={() => togglePanelNavPage(1, false)} name={'Output'} />
      <CiSearchPopup.Li callback={() => togglePanelNavPage(2, false)} name={'Debug Console'} />
      <CiSearchPopup.Li callback={() => togglePanelNavPage(3, false)} name={'Terminal'} />
      <CiSearchPopup.Li callback={() => togglePanelNavPage(4, false)} name={'Ports'} />
    </>
  )
}

export default OpenViewList
