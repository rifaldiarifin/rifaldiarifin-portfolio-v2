import { useNavigate } from 'react-router-dom'
import Icons8 from '../elements/Icons8'

const PaginatedFile = ({ children, name, icon = 'degrees', index, left, iconSize = '6px', to = '#' }) => {
  const navigate = useNavigate()
  const openFile = () => {
    navigate(to, { replace: true })
  }
  return (
    <div className="paginated-file active" style={{ '--index': index, paddingLeft: left }}>
      <div className="paginated-header" onClick={openFile}>
        <div className="icon">
          <Icons8 icon={icon} size={iconSize} />
        </div>
        {name}
      </div>
      <div className="paginated-body">{children}</div>
    </div>
  )
}

export default PaginatedFile
