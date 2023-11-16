import { predictClass } from '../../utils/predictClass'
import Button from '../Elements/Button'

const NavPage = ({
  children,
  name,
  allowInput = false,
  typeInput = 'search',
  ariaLabel = 'Search',
  onInput = () => {},
  placeHolder = 'Search',
  Buttons,
  isActive,
  isLoading,
  moreClass
}) => {
  return (
    <div
      className={`navpage${predictClass(() => isActive)}${predictClass(() => moreClass, moreClass)}${predictClass(
        () => isLoading,
        'loading'
      )}`}
    >
      <div className="nav-header">
        <div className="box">
          <p>{name}</p>
          <div className="box dsp-flex align-itms-center gap-6">{Buttons}</div>
          <span className="line-loading"></span>
        </div>
        {allowInput && (
          <div className="input-box">
            <div className="simple-inputfield">
              <input type={typeInput} autoFocus placeholder={placeHolder} aria-label={ariaLabel} onInput={onInput} />
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

const BtnHead = ({ icon = 'more', disabled = false, onClick = () => {} }) => {
  return (
    <Button
      icon={icon}
      iconStyle="filled"
      iconSize={'16px'}
      height={'26px'}
      moreClass={'icon'}
      style={'fill'}
      brightness={'var(--icon1)'}
      color="classic"
      onClick={onClick}
      disabled={disabled}
    />
  )
}
NavPage.BtnHead = BtnHead
export default NavPage
