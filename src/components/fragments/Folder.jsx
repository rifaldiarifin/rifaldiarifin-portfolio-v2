import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFolderAutoExpand from '../../hooks/useFolderAutoExpand'
import { predictClass } from '../../utils/predictClass'
import Codicon from '../elements/Codicon'

const Folder = ({
  children,
  name,
  icon = 'chevron-right',
  iconSize = '16px',
  to = '#',
  lock = false,
  directory = null,
  isSelected = false,
  isRotateIcon = true,
  isActive = false,
  pathMatchExpand = false,
  callback = () => {}
}) => {
  const navigate = useNavigate()
  const ref = useRef(null)
  useFolderAutoExpand(ref, directory, pathMatchExpand, isSelected)
  const navigateTo = () => {
    if (to) navigate(to, { replace: true, state: true })
  }

  const toggle = async () => {
    await callback()
    navigateTo()
    if (lock) return
    const folder = ref.current
    folder.classList.toggle('active')
  }
  return (
    <div
      className={`folder${predictClass(() => isActive)}${predictClass(
        () => isRotateIcon,
        'rotateonopen'
      )}${predictClass(() => directory === isSelected, 'selected')}`}
      ref={ref}
    >
      <div className="folder-header" onClick={toggle}>
        <div className="icon">
          <Codicon icon={icon} size={iconSize} />
        </div>
        {name}
      </div>
      <div className="folder-body">{children}</div>
    </div>
  )
}

export default Folder
