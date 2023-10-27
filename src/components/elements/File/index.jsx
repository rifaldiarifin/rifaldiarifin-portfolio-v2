import { useNavigate } from 'react-router-dom'
import Icons8 from '../Icons8'
import { predictClass } from '../../../utils/predictClass'

const File = ({
  name,
  type = 'hyperlink',
  icon = 'degrees',
  directory = null,
  isSelected = false,
  indicator = null,
  iconSize = '6px',
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
      <div className="icon">
        {icon === '#' ? '#' : <Icons8 icon={`${icon}${indicator ? ' gradient' : ''}`} size={iconSize} />}
      </div>
      {name}
    </div>
  )
}

export default File
