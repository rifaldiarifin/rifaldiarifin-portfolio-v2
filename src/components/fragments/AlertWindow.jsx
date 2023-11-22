import Button from '../Elements/Button'

const AlertWindow = ({
  titleBar = 'Hello World',
  title = 'Hello World',
  description = 'Yoo Watsupppp bro :D',
  alertType = 'message',
  alertStyle = 'info',
  action = {
    close: () => {},
    ok: () => {},
    yes: () => {},
    no: () => {}
  }
}) => {
  return (
    <div className={`alert-window ${alertType} ${alertStyle}`}>
      <div className="header-alert">
        <h2>{titleBar}</h2>
        <span className="close icons8-regular delete" onClick={action.close}></span>
      </div>
      <div className="content-alert">
        <span className="icon-alert"></span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="footer-alert">
        {alertType === 'message' ? (
          <Button style="fill" color={alertStyle} onClick={action.ok} ariaLabel={'OK Option'}>
            OK
          </Button>
        ) : alertType === 'confirm' ? (
          <>
            <Button style="fill" color={alertStyle} onClick={action.yes} ariaLabel={'Yes Option'}>
              Yes
            </Button>
            <Button style="regular" color={alertStyle} onClick={action.no} ariaLabel={'No Option'}>
              No
            </Button>
          </>
        ) : (
          <span style={{ color: 'red' }}>Unknown Alert Type!</span>
        )}
      </div>
    </div>
  )
}

export default AlertWindow
