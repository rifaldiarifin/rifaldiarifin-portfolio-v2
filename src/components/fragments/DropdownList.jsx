const DropdownList = ({ name, children }) => {
  const onClick = (event) => event.target.parentElement.classList.toggle('active')
  return (
    <div className="dropdown-list active">
      <div className="dl-header" onClick={onClick}>
        {name}
      </div>
      <div className="dl-body">{children}</div>
    </div>
  )
}

export default DropdownList
