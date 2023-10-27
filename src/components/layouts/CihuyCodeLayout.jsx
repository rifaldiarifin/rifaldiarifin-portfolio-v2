import { LazyLoadImage } from 'react-lazy-load-image-component'
import { predictClass } from '../../utils/predictClass'
import Button from '../Elements/Button'
import Icons8 from '../elements/Icons8'
import DynamicDropdown from '../fragments/DynamicDropdown'
import { useEffect, useRef } from 'react'
import { forwardRef } from 'react'

// Container Cihuy Code Layout ############################################
const CihuyCodeLayout = ({ children, theme = 'cihuy-theme', isSidebarReverse = false }) => {
  return (
    <div
      className={`cihuy-code${predictClass(() => theme, 'cihuy-theme')}${predictClass(
        () => isSidebarReverse,
        'sidebar-reverse'
      )}`}
    >
      {children}
    </div>
  )
}

// Ci Search Popup ############################################
export const CiSearchPopup = ({
  label,
  allowSearch = true,
  titleBarRef = null,
  onClose,
  onOutsideClick = () => {},
  toolButton,
  allowLabel = true,
  isActive = false,
  placeHolder = 'Search',
  closeOnOutsideClick = true,
  children
}) => {
  const ref = useRef(null)
  useEffect(() => {
    if (!isActive || !closeOnOutsideClick) return
    const handleOutsideClick = (event) => {
      if (
        isActive &&
        ref.current &&
        !ref.current.contains(event.target) &&
        !titleBarRef.current.contains(event.target)
      ) {
        onOutsideClick()
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [isActive, closeOnOutsideClick])

  return (
    <div id="ci-searchpopup" className={predictClass(() => isActive)} ref={ref}>
      <div className="searchpopup-header">
        {allowLabel && (
          <div className="labelsearch">
            {label}
            <div>
              {toolButton}
              <Button
                style={'fill'}
                color="classic"
                iconStyle={'filled'}
                icon={'delete'}
                iconSize={'14px'}
                height={'20px'}
                moreClass={'icon'}
                onClick={onClose}
              />
            </div>
          </div>
        )}
        {allowSearch && (
          <div className="inputsearch">
            <div className="simple-inputfield">
              <input type="text" id="globalsearch" name="globalsearch" autoFocus placeholder={placeHolder} />
            </div>
          </div>
        )}
      </div>
      <div className="searchpopup-body">
        <div className="sp-point"></div>
        {children}
      </div>
    </div>
  )
}

const CiSearchPopup_btnTool = ({ icon, size = '14px', style = 'regular', onClick }) => {
  return (
    <Button
      style={'fill'}
      color="classic"
      iconStyle={style}
      icon={icon}
      iconSize={size}
      height={'20px'}
      moreClass={'icon'}
      onClick={onClick}
    />
  )
}

const CiSearchPopup_Li = ({
  name,
  label,
  leftIcon = null,
  leftIconSize = '20px',
  leftIconStyle = 'regular',
  rightIcon = null,
  rightIconSize = '14px',
  rightIconStyle = 'regular',
  leftBrightness = 'var(--icon2)',
  rightBrightness = 'var(--icon2)',
  isActive = false,
  isChecked = false,
  callback = async () => {}
}) => {
  const spList = useRef(null)
  const onClick = async (event) => {
    await callback(event)
    if (!spList) return
    spList.current.classList.add('active')
  }

  const switchPoint = () => {
    if (!spList) return
    const point = spList.current.parentElement.children[0]
    const offsetTopElement = spList.current.offsetTop
    point.setAttribute('style', `--offset-top: ${offsetTopElement}px`)
  }

  const useOtherListClick = (element) => {
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (
          element.current &&
          !element.current.contains(e.target) &&
          element.current.parentElement.contains(e.target)
        ) {
          spList.current.classList.remove('active')
        }
      }
      document.addEventListener('click', handleOutsideClick)
      return () => document.removeEventListener('click', handleOutsideClick)
    }, [element])
  }

  useOtherListClick(spList)
  return (
    <div className={`sp-list${predictClass(() => isActive)}`} ref={spList} onMouseEnter={switchPoint} onClick={onClick}>
      <div>
        {leftIcon && (
          <div className="sp-left-icon">
            <Icons8 icon={leftIcon} style={leftIconStyle} size={leftIconSize} filter={leftBrightness} />
          </div>
        )}
        {name}
        {isChecked && (
          <div className="checked-icon">
            <Icons8 icon={'done'} style={'filled'} size={'18px'} filter={leftBrightness} />
          </div>
        )}
      </div>
      <div>
        {label}
        {rightIcon && (
          <div className="sp-right-icon">
            <Icons8 icon={rightIcon} style={rightIconStyle} size={rightIconSize} filter={rightBrightness} />
          </div>
        )}
      </div>
    </div>
  )
}

const CiSearchPopup_Separator = () => {
  return <span className="sp-separator"></span>
}

CiSearchPopup.Li = CiSearchPopup_Li
CiSearchPopup.btnTool = CiSearchPopup_btnTool
CiSearchPopup.Separator = CiSearchPopup_Separator

// Ci Titlebar ############################################
// eslint-disable-next-line react/display-name
export const CiTitleBar = forwardRef(({ iconBar, menuBar, rightSide }, ref) => {
  return (
    <header id="ci-titlebar" ref={ref}>
      <div className="box">
        <div className="titlebar-icon">
          <img src={iconBar} alt="Rifaldi" />
        </div>
        <ul className="menubar">{menuBar}</ul>
      </div>
      <div className="box">{rightSide}</div>
    </header>
  )
})

const CiTitlebar_Menu = ({ name, dpList }) => {
  return (
    <li>
      <DynamicDropdown
        button={
          <Button style={'fill'} color="classic" height={'26px'}>
            {name}
          </Button>
        }
      >
        {dpList}
      </DynamicDropdown>
    </li>
  )
}

const CiTitlebar_Btnbar = ({ icon, isActive, onClick }) => {
  return (
    <Button
      style={'fill'}
      color="classic"
      iconStyle={isActive ? 'filled' : 'regular'}
      icon={icon}
      iconSize={'24px'}
      height={'26px'}
      moreClass={'icon'}
      onClick={onClick}
    />
  )
}

CiTitleBar.Menu = CiTitlebar_Menu
CiTitleBar.Btnbar = CiTitlebar_Btnbar

// Ci Primary Sidebar ############################################
export const CiPrimarySidebar = ({
  activityActive = true,
  primaryActive = true,
  findIndexActive = () => {},
  buttonNavPages,
  buttonOptions,
  navPages
}) => {
  return (
    <nav id="ci-primary-sidebar">
      <div className={`activity-bar${predictClass(() => activityActive)}`}>
        <ul className="box">
          <li className="point" style={{ '--index-point': findIndexActive() }}></li>
          {buttonNavPages}
        </ul>
        <ul className="box">{buttonOptions}</ul>
      </div>
      <div className={`primary-bar${predictClass(() => primaryActive)}`}>{navPages}</div>
    </nav>
  )
}

const CiPrimSidebar_BtnNav = ({ icon, isActive, onClick = () => {} }) => {
  return (
    <li>
      <Button
        icon={`gradient ${icon}`}
        iconSize={'28px'}
        onClick={onClick}
        moreClass={`icon${predictClass(() => isActive)}`}
      />
    </li>
  )
}

const CiPrimSidebar_BtnOption = ({ icon, dpList, onClick, position = 'right-2' }) => {
  return (
    <li>
      <DynamicDropdown
        button={<Button icon={`gradient ${icon}`} iconSize={'28px'} moreClass={'icon'} onClick={onClick} />}
        position={position}
      >
        {dpList}
      </DynamicDropdown>
    </li>
  )
}

CiPrimarySidebar.BtnNav = CiPrimSidebar_BtnNav
CiPrimarySidebar.BtnOption = CiPrimSidebar_BtnOption

// Ci Secondary Sidebar ############################################
export const CiSecondarySidebar = ({ isActive, onClose = () => {} }) => {
  return (
    <nav id="ci-secondary-sidebar" className={`${predictClass(() => isActive)}`}>
      <div className="close">
        <Button
          icon={'delete'}
          iconStyle="filled"
          iconSize={'16px'}
          height={'26px'}
          moreClass={'icon'}
          style={'fill'}
          color="classic"
          onClick={onClose}
          brightness={'var(--icon1)'}
        />
      </div>
      <p>Preview Display</p>
    </nav>
  )
}

// Ci Panel ############################################
export const CiPanel = ({ menuBar, isActive, onClose = () => {} }) => {
  return (
    <div id="ci-panel" className={`${predictClass(() => isActive)}`}>
      <div className="panel-header">
        <ul>{menuBar}</ul>
        <div className="box">
          <Button
            icon={'more'}
            iconStyle="filled"
            iconSize={'16px'}
            height={'26px'}
            moreClass={'icon'}
            style={'fill'}
            brightness={'var(--icon1)'}
            color="classic"
          />
          <Button
            icon={'delete'}
            iconStyle="filled"
            iconSize={'16px'}
            height={'26px'}
            moreClass={'icon'}
            style={'fill'}
            brightness={'var(--icon1)'}
            color="classic"
            onClick={onClose}
          />
        </div>
      </div>
      <div className="panel-body"></div>
    </div>
  )
}

const CiPanel_Menubar = ({ name, isActive, onClick }) => {
  return (
    <li>
      <Button height={'100%'} moreClass={predictClass(() => isActive, 'active', false)} onClick={onClick}>
        {name}
      </Button>
    </li>
  )
}

CiPanel.Menubar = CiPanel_Menubar

// Ci Editor Layout ############################################
export const CiEditorLayout = ({
  editorStatus,
  onOpenShortcut,
  isActiveDirectory,
  menuBar,
  btnOptions,
  directory,
  children
}) => {
  return (
    <div id="ci-editorlayout" className={predictClass(() => editorStatus === false, 'loading')}>
      {editorStatus > 0 ? (
        <>
          <div className="editorlayout-header">
            <div className="editor-menubar">
              <ul>{menuBar}</ul>
            </div>
            <div className="editor-options">{btnOptions}</div>
            {isActiveDirectory && <div className="editor-directory">{directory}</div>}
          </div>
          <div className="editorlayout-body">{children}</div>
        </>
      ) : editorStatus === 0 ? (
        <div className="blank-editor-page">
          <div className="blank-logo">
            <LazyLoadImage src="/img/logos/rifaldi_logo_black.png" effect="opacity" />
          </div>
          <div className="box">
            <h2>Nothing to View</h2>
            <p>Click something on explorer, left primary sidebar</p>
            <span>OR</span>
            <Button color="default" style={'fill'} onClick={onOpenShortcut}>
              Open main
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

const CiEditorLayout_Menubar = ({
  name,
  currentlyOpenDirectory,
  directory,
  onClick = () => {},
  onClose = () => {}
}) => {
  const onClickMenubar = (event) => {
    if (event.target.classList.contains('menubar')) onClick(event)
  }
  const onCloseMenubar = (event) => {
    if (event.target.classList.contains('close')) onClose(event)
  }

  return (
    <li
      className={`menubar${predictClass(() => currentlyOpenDirectory === directory)}`}
      tabIndex={0}
      onClick={onClickMenubar}
    >
      {name}
      <Button
        icon={'delete'}
        iconStyle="filled"
        iconSize={'12px'}
        height={'20px'}
        moreClass={'close icon'}
        style={'fill'}
        brightness={currentlyOpenDirectory === directory ? 'var(--icon4)' : 'var(--icon1)'}
        onClick={onCloseMenubar}
        color="classic"
      />
    </li>
  )
}

const CiEditorLayout_Directory = ({ directory }) => {
  const arrDirectory = directory.split('/')
  arrDirectory.splice(0, 1)
  return (
    <>
      {arrDirectory.map((directory, index) => (
        <div key={`${directory}${index}`} className="dir-arrow">
          {directory}
          {index !== arrDirectory.length - 1 && <Icons8 icon="forward" style="filled" size={'11px'} />}
        </div>
      ))}
    </>
  )
}

CiEditorLayout.Menubar = CiEditorLayout_Menubar
CiEditorLayout.Directory = CiEditorLayout_Directory

// Ci Statusbar ############################################
export const CiStatusbar = ({ children, isActive }) => {
  return (
    <footer id="ci-statusbar" className={predictClass(() => isActive)}>
      {children}
    </footer>
  )
}

// Components
export const BtnIcon = ({
  icon = 'rounded-square',
  iconStyle,
  height = '26px',
  iconSize = '20px',
  brightness = 'var(--icon1)'
}) => {
  return (
    <Button
      icon={icon}
      iconStyle={iconStyle}
      iconSize={iconSize}
      height={height}
      moreClass={'icon'}
      style={'fill'}
      brightness={brightness}
      color="classic"
    />
  )
}

export default CihuyCodeLayout
