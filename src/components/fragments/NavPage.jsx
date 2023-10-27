import { predictClass } from '../../utils/predictClass'
import Button from '../Elements/Button'

const NavPage = ({ children, name, isActive, isLoading }) => {
  return (
    <div className={`navpage${predictClass(() => isActive)}${predictClass(() => isLoading, 'loading')}`}>
      <div className="nav-header">
        <div className="box">
          <p>{name}</p>
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
          <span className="line-loading"></span>
        </div>
      </div>
      {children}
    </div>
  )
}

export default NavPage
