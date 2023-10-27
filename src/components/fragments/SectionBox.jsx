import { useState } from 'react'
import Icons8 from '../elements/Icons8'

const SectionBox = ({ children, name, isActive, minHeight }) => {
  const [state, setState] = useState(isActive ?? false)
  return (
    <div className={`section-box${state ? ' active' : ''}`}>
      <div className="section-header" onClick={() => setState(!state)}>
        <div className="icon">
          <Icons8 icon="forward" size={'12px'} />
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
