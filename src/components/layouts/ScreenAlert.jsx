const ScreenAlert = ({ children, active = false }) => {
  return (
    <div id="screenalert" className={active ? 'active' : ''}>
      {children}
    </div>
  )
}

export default ScreenAlert
