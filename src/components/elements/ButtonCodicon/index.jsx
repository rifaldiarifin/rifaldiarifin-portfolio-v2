import { Link } from 'react-router-dom'

const ButtonCodicon = ({
  children,
  type = 'button',
  to = '/',
  id = undefined,
  onClick = () => {},
  style = undefined,
  color = 'default',
  disabled = false,
  icon = undefined,
  iconSize = undefined,
  iconColor = undefined,
  brightness = undefined,
  width = undefined,
  height = undefined,
  moreClass = undefined,
  allowNewTab = false,
  ariaLabel = null
}) => {
  switch (type) {
    case 'hyperlink':
      return (
        <Link
          to={to}
          className={`btn ${style ? 'btn-' + style : ''} ${color}${moreClass ? ` ${moreClass}` : ''}${
            disabled ? ' disabled' : ''
          }`}
          id={id}
          onClick={(e) => onClick(e)}
          style={{ height, minHeight: height, width, minWidth: width }}
          aria-label={ariaLabel}
        >
          {icon && (
            <span
              className={`codicon codicon-${icon}`}
              style={{ fontSize: iconSize, color: iconColor, filter: brightness }}
            ></span>
          )}
          <span>{children}</span>
        </Link>
      )
    case 'link':
      return (
        <a
          href={to}
          className={`btn ${style ? 'btn-' + style : ''} ${color}${moreClass ? ` ${moreClass}` : ''}${
            disabled ? ' disabled' : ''
          }`}
          target={allowNewTab ? '_blank' : null}
          id={id}
          onClick={(e) => onClick(e)}
          style={{ height, minHeight: height, width, minWidth: width }}
          rel={allowNewTab ? 'noreferrer' : null}
          aria-label={ariaLabel}
        >
          {icon && (
            <span
              className={`codicon codicon-${icon}`}
              style={{ '--vscodicon-size': iconSize, '--vscodicon-color': iconColor, filter: brightness }}
            ></span>
          )}
          <span>{children}</span>
        </a>
      )

    default:
      return (
        <button
          type={type}
          className={`btn ${style ? 'btn-' + style : ''} ${color}${moreClass ? ` ${moreClass}` : ''}${
            disabled ? ' disabled' : ''
          }`}
          id={id}
          onClick={(e) => onClick(e)}
          style={{ height, minHeight: height, width, minWidth: width }}
          aria-label={ariaLabel}
        >
          {icon && (
            <span
              className={`codicon codicon-${icon}`}
              style={{ '--vscodicon-size': iconSize, '--vscodicon-color': iconColor, filter: brightness }}
            ></span>
          )}
          <span>{children}</span>
        </button>
      )
  }
}

export default ButtonCodicon
