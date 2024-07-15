import { useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { predictClass } from '../../utils/predictClass'
import Button from '../elements/Button'
import ButtonCodicon from '../elements/ButtonCodicon'
import DynamicDropdown from '../fragments/DynamicDropdown'
import { forwardRef } from 'react'
import { useToastNotificationData } from '../../contexts/ToastNotificationContext'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import Codicon from '../elements/Codicon'
import Icons8 from '../elements/Icons8'

// Container Cihuy Code Layout ############################################
const CihuyCodeLayout = ({
  children,
  theme = 'cihuy-theme',
  isSidebarReverse = false,
  activityActive = true,
  primaryActive = true,
  secondaryActive = false,
  statusbarActive = true,
  panelActive = false,
  isFullPanel = false,
  wordWrap = false
}) => {
  return (
    <div
      className={`cihuy-code${predictClass(() => theme, theme)}${predictClass(
        () => isSidebarReverse,
        'sidebar-reverse'
      )}${predictClass(() => activityActive, 'act-active')}${predictClass(
        () => primaryActive,
        'primbar-active'
      )}${predictClass(() => secondaryActive, 'secn-active')}${predictClass(
        () => statusbarActive,
        'stsbar-active'
      )}${predictClass(() => panelActive, 'pnl-active')}${predictClass(() => isFullPanel, 'full-panel')}${predictClass(
        () => wordWrap,
        'word-wrap'
      )}`}
    >
      {children}
    </div>
  )
}

// Ci Toast Notification
export const CiToastNotification = () => {
  const { toast, clearToastNotification } = useToastNotificationData()
  // const [isActive, setIsActive] = useState(false)
  const typeCheck = () => {
    switch (toast.type) {
      case 'info':
        return 'info'
      case 'error':
        return 'error'
      case 'warning':
        return 'warning'
      case 'success':
        return 'pass'

      default:
        return 'info'
    }
  }
  const toggleActive = (event) => event.target.parentElement.parentElement.parentElement.classList.toggle('active')
  return (
    <div id="ci-toastnotification" className={predictClass(() => toast.isActive)}>
      <div key={toast.id} className={`toast ${toast.type}`}>
        {toast.isActive && (
          <>
            <div className="toast-header">
              <div className="box dsp-flex align-itms-center gap-6">
                <div className="toast-icon">
                  <Icons8 icon={typeCheck()} gradient />
                  {/* <Codicon icon={typeCheck()} /> */}
                </div>
                {toast.title}
              </div>
              <div className="box dsp-flex align-itms-center gap-6">
                <Button
                  style={'fill'}
                  color="classic"
                  iconStyle={'filled'}
                  icon={'forward'}
                  iconSize={'12px'}
                  height={'22px'}
                  moreClass={'icon btn-expand'}
                  onClick={toggleActive}
                  ariaLabel={'button toast1'}
                />
                <Button
                  style={'fill'}
                  color="classic"
                  iconStyle={'filled'}
                  icon={'delete'}
                  iconSize={'12px'}
                  height={'22px'}
                  moreClass={'icon'}
                  onClick={clearToastNotification}
                  ariaLabel={'button toast2'}
                />
              </div>
            </div>
            <div className="toast-body">
              <p>Source: {toast.source}</p>
              <div className="toast-actions">
                {toast.actions.map((action, index) => (
                  <Button
                    key={`${action.title}${index}`}
                    color="default"
                    height={'30px'}
                    style={'fill'}
                    onClick={action.onClick}
                    ariaLabel={`${action.title}${index}`}
                  >
                    {action.name}
                  </Button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
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
  children,
  moreClass
}) => {
  const ref = useRef(null)
  useEffect(() => {
    if (!isActive || !closeOnOutsideClick) return
    const handleOutsideClick = (event) => {
      if (
        isActive &&
        ref.current &&
        !ref.current.contains(event.target) &&
        !titleBarRef.current.contains(event.target) &&
        !event.target.classList.contains('btn-searchpopup')
      ) {
        ref.current.children[1].children[0].setAttribute('style', '--offset-top: 0px')
        onOutsideClick()
        ref.current.children[1].scrollTo(0, 0)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [isActive, closeOnOutsideClick])

  return (
    <div
      id="ci-searchpopup"
      className={`${predictClass(() => isActive)}${predictClass(() => moreClass, moreClass)}`}
      ref={ref}
    >
      <div className="searchpopup-header">
        {allowLabel && (
          <div className="labelsearch">
            {label}
            <div>
              {toolButton}
              <ButtonCodicon
                color="classic"
                iconStyle={'filled'}
                icon={'close'}
                iconSize={'14px'}
                height={'20px'}
                moreClass={'icon'}
                onClick={onClose}
                ariaLabel={'Close Search Popup'}
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

const CiSearchPopup_btnTool = ({ icon, size = '14px', style = 'regular', onClick, ariaLabel = null, moreClass }) => {
  return (
    <ButtonCodicon
      color="classic"
      iconStyle={style}
      icon={icon}
      iconSize={size}
      height={'20px'}
      moreClass={`icon${predictClass(() => moreClass, moreClass)}`}
      onClick={onClick}
      ariaLabel={ariaLabel}
    />
  )
}

const CiSearchPopup_Li = ({
  name,
  label,
  leftIcon = null,
  leftIconSize = '18px',
  // leftIconStyle = 'regular',
  rightIcon = null,
  rightIconSize = '18px',
  // rightIconStyle = 'regular',
  // keyCode = [],
  isActive = false,
  disabledAutoActive = false,
  closeAfterClick = () => {},
  isChecked = false,
  callback = async () => {},
  moreClass = ''
}) => {
  const keyCode = []
  const spList = useRef(null)
  const onClick = async (event) => {
    await callback(event)
    if (!event.target.classList.contains('btn-searchpopup')) closeAfterClick()
    if (spList && disabledAutoActive) spList.current.classList.add('active')
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
          element.current.parentElement.contains(e.target) &&
          !disabledAutoActive
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
    <div
      className={`sp-list${predictClass(() => isActive)}${predictClass(() => moreClass, moreClass)}`}
      ref={spList}
      onMouseEnter={switchPoint}
      onClick={onClick}
    >
      <div>
        {leftIcon && (
          <div className="sp-left-icon">
            <Codicon icon={leftIcon} size={leftIconSize} />
            {/* <Icons8 gradient icon={leftIcon} style={leftIconStyle} size={leftIconSize} /> */}
          </div>
        )}
        {name}
        {isChecked && (
          <div className="checked-icon">
            <Codicon icon={'check'} size={leftIconSize} />
          </div>
        )}
      </div>
      <div>
        {keyCode.length > 0 && (
          <div className="box dsp-flex gap-10">
            {keyCode.map((keys, index) => {
              return (
                <div key={index} className="box dsp-flex gap-4">
                  {keys.map((key, i) => (
                    <div key={`${key}${index}`} className="box dsp-flex gap-4">
                      <div className="keycode">{key}</div>
                      {keys.length - 1 !== i && '+'}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        )}
        {label}
        {rightIcon && (
          <div className="sp-right-icon">
            <Codicon icon={rightIcon} size={rightIconSize} />
            {/* <Icons8 gradient icon={rightIcon} style={rightIconStyle} size={rightIconSize} /> */}
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

const CiTitlebar_Menu = ({ name, dpList, ariaLabel }) => {
  return (
    <li>
      <DynamicDropdown
        button={
          <Button style={'fill'} color="classic" height={'26px'} ariaLabel={ariaLabel}>
            {name}
          </Button>
        }
      >
        {dpList}
      </DynamicDropdown>
    </li>
  )
}

const CiTitlebar_Btnbar = ({ icon, iconActive, isActive, ariaLabel = null, onClick }) => {
  return (
    <ButtonCodicon
      style={'fill'}
      color="classic"
      icon={`${isActive ? icon : iconActive}`}
      iconSize={'20px'}
      height={'26px'}
      moreClass={'icon'}
      onClick={onClick}
      ariaLabel={ariaLabel}
    />
  )
}

CiTitleBar.Menu = CiTitlebar_Menu
CiTitleBar.Btnbar = CiTitlebar_Btnbar

// Ci Primary Sidebar ############################################
// eslint-disable-next-line react/display-name
export const CiPrimarySidebar = forwardRef(
  ({ findIndexActive = () => {}, activityActive = false, buttonNavPages, buttonOptions, navPages }, ref) => {
    return (
      <nav id="ci-primary-sidebar" ref={ref}>
        <div className={`activity-bar${predictClass(() => activityActive)}`}>
          <ul className="box">
            <li className="point" style={{ '--index-point': findIndexActive() }}></li>
            {buttonNavPages}
          </ul>
          <ul className="box">{buttonOptions}</ul>
        </div>
        <div className="primary-bar">{navPages}</div>
      </nav>
    )
  }
)

const CiPrimSidebar_BtnNav = ({ icon, isActive, ariaLabel = null, onClick = () => {} }) => {
  return (
    <li>
      <ButtonCodicon
        icon={`${icon}`}
        iconSize={'24px'}
        onClick={onClick}
        ariaLabel={ariaLabel}
        moreClass={`icon${predictClass(() => isActive)}`}
      />
    </li>
  )
}

const CiPrimSidebar_BtnOption = ({
  type = 'button',
  to,
  icon,
  iconSize = '28px',
  iconStyle = 'regular',
  dpList,
  onClick,
  position = 'right-2',
  ariaLabel
}) => {
  switch (type) {
    case 'link':
      return (
        <li>
          <Button
            type="link"
            to={to}
            icon={`gradient ${icon}`}
            iconStyle={iconStyle}
            iconSize={iconSize}
            moreClass={'icon'}
            onClick={onClick}
            ariaLabel={ariaLabel}
            allowNewTab
          />
        </li>
      )

    default:
      return (
        <li>
          <DynamicDropdown
            button={
              <ButtonCodicon
                icon={`${icon}`}
                iconSize={'24px'}
                onClick={onClick}
                ariaLabel={ariaLabel}
                moreClass={'icon'}
              />
            }
            position={position}
          >
            {dpList}
          </DynamicDropdown>
        </li>
      )
  }
}

CiPrimarySidebar.BtnNav = CiPrimSidebar_BtnNav
CiPrimarySidebar.BtnOption = CiPrimSidebar_BtnOption

// Ci Secondary Sidebar ############################################
// eslint-disable-next-line react/display-name
export const CiSecondarySidebar = forwardRef(({ onClose = () => {} }, ref) => {
  return (
    <nav id="ci-secondary-sidebar" ref={ref}>
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
          ariaLabel={'Toggle Secondarybar'}
        />
      </div>
      <p>Preview Display</p>
    </nav>
  )
})

// Ci Panel ############################################
export const CiPanel = ({ menuBar, onFullPanel = () => {}, onClose = () => {}, children }) => {
  return (
    <div id="ci-panel">
      <div className="panel-header">
        <ul>{menuBar}</ul>
        <div className="box">
          <ButtonCodicon
            icon={'chevron-right'}
            iconSize={'20px'}
            height={'26px'}
            moreClass={'btn-fullpanel icon'}
            style={'fill'}
            brightness={'var(--icon2)'}
            color="classic"
            ariaLabel={'Toggle expand panel'}
            onClick={onFullPanel}
          />
          <ButtonCodicon
            icon={'close'}
            iconStyle="filled"
            iconSize={'20px'}
            height={'26px'}
            moreClass={'icon'}
            style={'fill'}
            brightness={'var(--icon2)'}
            color="classic"
            ariaLabel={'Toggle open panel'}
            onClick={onClose}
          />
        </div>
      </div>
      <div className="panel-body">{children}</div>
    </div>
  )
}

const CiPanel_Menubar = ({ name, isActive, onClick, ariaLabel }) => {
  return (
    <li>
      <Button
        height={'100%'}
        moreClass={predictClass(() => isActive, 'active', false)}
        ariaLabel={ariaLabel}
        onClick={onClick}
      >
        {name}
      </Button>
    </li>
  )
}

CiPanel.Menubar = CiPanel_Menubar

// Ci Editor Layout ############################################
// eslint-disable-next-line react/display-name
export const CiEditorLayout = forwardRef(
  ({ editorStatus, onOpenShortcut, isActiveDirectory, menuBar, btnOptions, directory, children }, ref) => {
    return (
      <div
        id="ci-editorlayout"
        className={`${predictClass(() => editorStatus === false, 'loading')}${predictClass(
          () => isActiveDirectory,
          'read-directory'
        )}`}
      >
        {editorStatus > 0 ? (
          <>
            <div className="editorlayout-header">
              <div className="editor-menubar">
                <ul>{menuBar}</ul>
              </div>
              <div className="editor-options">{btnOptions}</div>
              <div className="editor-directory">{isActiveDirectory && directory}</div>
            </div>
            <div className="editorlayout-body" ref={ref}>
              {children}
            </div>
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
              <Button
                color="default"
                style={'fill'}
                moreClass={'rounded10'}
                onClick={onOpenShortcut}
                ariaLabel={'Back to Main'}
              >
                Open main
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
)

const CiEditorLayout_Menubar = ({
  name,
  currentlyOpen,
  directory,
  to,
  ariaLabel = null,
  onClick = () => {},
  onClose = () => {}
}) => {
  const onClickMenubar = (event) => {
    if (event.target.classList.contains('menubar')) onClick(event)
  }
  const onCloseMenubar = (event) => {
    if (event.target.classList.contains('close')) onClose(event)
  }
  const checkOpen = () => {
    return directory ? currentlyOpen.directory === directory : to ? currentlyOpen.to === to : false
  }
  return (
    <li className={`menubar${predictClass(() => checkOpen())}`} tabIndex={0} onClick={onClickMenubar}>
      {name}
      <ButtonCodicon
        icon={'close'}
        iconSize={'16px'}
        height={'20px'}
        moreClass={'close icon'}
        style={'fill'}
        brightness={checkOpen() ? 'var(--icon4)' : 'var(--icon1)'}
        onClick={onCloseMenubar}
        color="classic"
        ariaLabel={ariaLabel}
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
          {/* {index !== arrDirectory.length - 1 && <Icons8 icon="forward" style="filled" size={'11px'} gradient />} */}
          {index !== arrDirectory.length - 1 && <Codicon icon="chevron-right" size={'16px'} />}
        </div>
      ))}
    </>
  )
}

CiEditorLayout.Menubar = CiEditorLayout_Menubar
CiEditorLayout.Directory = CiEditorLayout_Directory

// Ci Statusbar ############################################
export const CiStatusbar = ({ children, onClickPorts = () => {}, onClickProblems = () => {} }) => {
  return (
    <footer id="ci-statusbar">
      <div className="box">
        <button className="remote" aria-label="remote">
          <Codicon icon="remote" />
        </button>
        {children}
        <div className="mrgn-x-10"></div>
        <button className="btn-sts" onClick={onClickProblems}>
          <Codicon icon="error" />
          0
          <Codicon icon="warning" />0
        </button>
        <button className="btn-sts" onClick={onClickPorts}>
          <Codicon icon="radio-tower" />0
        </button>
        {/* <p>Copyright © 2023, All Rights Reserved.</p> */}
      </div>
      <div className="box pad-r-8">
        <button className="btn-sts" aria-label="Ext React Code Render">
          <Codicon icon="file-code" />
          React Code Render
        </button>
        <button className="btn-sts" aria-label="Toggle Notification">
          <Codicon icon="bell" />
        </button>
      </div>
    </footer>
  )
}

// Components
export const BtnIcon = ({
  icon = 'rounded-square',
  height = '26px',
  iconSize = '20px',
  brightness = 'var(--icon1)',
  ariaLabel = null,
  onClick = () => {}
}) => {
  return (
    <ButtonCodicon
      icon={icon}
      iconSize={iconSize}
      height={height}
      moreClass={'icon'}
      style={'fill'}
      brightness={brightness}
      color="classic"
      onClick={onClick}
      ariaLabel={ariaLabel}
    />
  )
}

export default CihuyCodeLayout
