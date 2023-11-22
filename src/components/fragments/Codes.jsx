import { forwardRef } from 'react'
import { predictClass } from '../../utils/predictClass'

// eslint-disable-next-line react/display-name
export const Codes = forwardRef(
  ({ children, disabled = false, line = '1', frame = null, renderStatus = false, renderTime = 0 }, ref) => {
    return (
      <div className="codes" ref={ref}>
        <div className={`write-code${predictClass(() => disabled, 'disabled')}`} data-numberline={line}>
          {children}
          {frame && renderStatus && <span className="rendercode-notif">Rendered time: {renderTime}ms</span>}
        </div>
        {frame && (
          <div className="display-frame wait">
            {renderStatus ? <>{frame}</> : <span className="rendercode-progress">Render Component</span>}
          </div>
        )}
      </div>
    )
  }
)
export const Space = ({ x = '' }) => {
  return <span className={`spacing${x}`}></span>
}
export const Variable = ({ val }) => {
  return <span className="variable">{val}</span>
}
export const VariableName = ({ val }) => {
  return <span className="variable-name">{val}</span>
}
export const ControlName = ({ val }) => {
  return <span className="control-name">{val}</span>
}
export const Control = ({ val }) => {
  return <span className="control">{val}</span>
}
export const BracketXml = ({ val }) => {
  return <span className="bracket-xml">{val}</span>
}
export const String = ({ val }) => {
  return <span className="string">{val}</span>
}
export const Colors = ({ val }) => {
  return <span className="color">{val}</span>
}
export const Comment = ({ val }) => {
  return <span className="comment">{val}</span>
}
export const KeywordOperator = ({ val }) => {
  return <span className="keyword-operator">{val}</span>
}
export const Bracket = ({ val, vart = '1' }) => {
  return <span className={`bracket${vart}`}>{val}</span>
}
