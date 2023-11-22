import { LazyLoadImage } from 'react-lazy-load-image-component'
import Icons8 from '../elements/Icons8'
import Button from '../elements/Button'

const ExtensionLi = ({ icon, displayName, description, publisher, onClick }) => {
  return (
    <div className="extension-list" onClick={onClick}>
      <div className="ext-logo">
        <LazyLoadImage src={icon} effect="opacity" alt="Cihuy Cat" />
      </div>
      <div className="ext-header">
        <div className="name">{displayName}</div>
        <div className="review"></div>
      </div>
      <div className="ext-body">
        <p>{description}</p>
      </div>
      <div className="ext-footer">
        <div className="publisher">
          <Icons8 icon="verified-badge" style="filled" gradient />
          {publisher}
        </div>
        <div className="options">
          <Button
            icon={'settings gradient'}
            style={'fill'}
            color="classic"
            moreClass={'icon'}
            ariaLabel={`Setting ${displayName}`}
          />
        </div>
      </div>
    </div>
  )
}

export default ExtensionLi
