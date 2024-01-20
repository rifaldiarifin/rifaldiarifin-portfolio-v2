import { useState } from 'react'
import Codicon from '../elements/Codicon'

const SectionBox = ({ children, name, isActive, minHeight }) => {
  const [state, setState] = useState(isActive ?? false)
  return (
    <div className={`section-box${state ? ' active' : ''}`}>
      <div className="section-header" onClick={() => setState(!state)}>
        <div className="icon">
          <Codicon icon="chevron-right" size={'16px'} />
        </div>
        {name}
      </div>
      <div className="section-body" style={{ '--min-h': minHeight }}>
        {/* <span className="post-point"></span> */}
        {children}
      </div>
    </div>
  )
}

export default SectionBox
