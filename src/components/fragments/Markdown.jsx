import { predictClass } from '../../utils/predictClass'

export const Heading = ({ lvl = 1, val, moreClass }) => {
  switch (lvl) {
    case 1:
      return <h1 className={`markdown heading${predictClass(() => moreClass, moreClass)}`}>{val}</h1>
    case 2:
      return <h2 className={`markdown heading${predictClass(() => moreClass, moreClass)}`}>{val}</h2>
    case 3:
      return <h3 className={`markdown heading${predictClass(() => moreClass, moreClass)}`}>{val}</h3>
    case 4:
      return <h4 className={`markdown heading${predictClass(() => moreClass, moreClass)}`}>{val}</h4>
    case 5:
      return <h5 className={`markdown heading${predictClass(() => moreClass, moreClass)}`}>{val}</h5>
    case 6:
      return <h6 className={`markdown heading${predictClass(() => moreClass, moreClass)}`}>{val}</h6>

    default:
      return <h1 className={`markdown heading${predictClass(() => moreClass, moreClass)}`}>{val}</h1>
  }
}

export const Enter = () => {
  return <br></br>
}

export const Strong = ({ val, moreClass }) => {
  return <span className={`markdown strong${predictClass(() => moreClass, moreClass)}`}>{val}</span>
}

export const KeyCode = ({ val, moreClass }) => {
  return <span className={`markdown keycode${predictClass(() => moreClass, moreClass)}`}>{val}</span>
}

export const Paragraph = ({ children, moreClass }) => {
  return <p className={`markdown paragraph${predictClass(() => moreClass, moreClass)}`}>{children}</p>
}

export const Item = ({ val, moreClass }) => {
  return <div className={`markdown item${predictClass(() => moreClass, moreClass)}`}>{val}</div>
}

export const Star = ({ val, moreClass }) => {
  return <div className={`markdown star${predictClass(() => moreClass, moreClass)}`}>{val}</div>
}

export const PreviewImage = ({ src, alt, val, moreClass }) => {
  return (
    <div className={`markdown preview-image${predictClass(() => moreClass, moreClass)}`}>
      <span>{val}</span>
      <img src={src} alt={alt} />
    </div>
  )
}

export const HyperLink = ({ to, val, moreClass }) => {
  return (
    <a
      className={`markdown hyperlink${predictClass(() => moreClass, moreClass)}`}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      {val}
    </a>
  )
}
