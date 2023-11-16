import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Icons8 from '../elements/Icons8'
import useFolderAutoExpand from '../../hooks/useFolderAutoExpand'
import { predictClass } from '../../utils/predictClass'

const Folder = ({
  children,
  name,
  icon = 'forward',
  iconSize = '12px',
  to = '#',
  lock = false,
  directory = null,
  isSelected = false,
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
      className={`folder${predictClass(() => isActive)}${predictClass(() => directory === isSelected, 'selected')}`}
      ref={ref}
    >
      <div className="folder-header" onClick={toggle}>
        <div className="icon">
          <Icons8 icon={icon} size={iconSize} />
        </div>
        {name}
      </div>
      <div className="folder-body">{children}</div>
    </div>
  )
}

export default Folder
