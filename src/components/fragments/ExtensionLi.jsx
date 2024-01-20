import { LazyLoadImage } from 'react-lazy-load-image-component'
import Codicon from '../elements/Codicon'
import ButtonCodicon from '../elements/ButtonCodicon'

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
          <Codicon icon="verified-filled" />
          {publisher}
        </div>
        <div className="options">
          <ButtonCodicon
            icon={'settings-gear'}
            style={'fill'}
            color="classic"
            iconSize={'14px'}
            moreClass={'icon'}
            ariaLabel={`Setting ${displayName}`}
          />
        </div>
      </div>
    </div>
  )
}

export default ExtensionLi
