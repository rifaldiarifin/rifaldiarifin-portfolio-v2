import { useNavigate } from 'react-router-dom'
import { predictClass } from '../../../utils/predictClass'
import Codicon from '../Codicon'

const File = ({
  name,
  type = 'hyperlink',
  icon = 'file',
  directory = null,
  isSelected = false,
  indicator = null,
  iconSize = '16px',
  to = '#',
  index,
  left,
  callback = () => {}
}) => {
  const navigate = useNavigate()
  const openFile = async () => {
    await callback()
    if (type === 'defaultlink') window.location.href = to
    navigate(to, { replace: true, state: true })
  }
  return (
    <div
      className={`file${predictClass(() => indicator, indicator)}${predictClass(
        () => directory === isSelected,
        'selected'
      )}`}
      onClick={openFile}
      style={{ '--index': index, paddingLeft: left }}
    >
      <div className="icon">{icon === '#' ? '#' : <Codicon icon={`${icon}`} size={iconSize} />}</div>
      {name}
    </div>
  )
}

export default File
